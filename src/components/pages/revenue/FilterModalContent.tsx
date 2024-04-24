"use client";

import { FormEvent, MouseEvent, useCallback, useReducer, useRef } from "react";
import { Badge, CustomSelect, PrimaryButton } from "@/components/ui";
import { FilterContentProps } from "@/application/domain/entities/pages";
import {
  dateRange,
  transactionStat,
  transactionTypes
} from "@/application/data/transactions";
import { DateTime } from "@/components/lib";
import filterReducer from "@/application/store/reducers/filter";
import { FILTER_CLEAR, FILTER_DATE } from "@/application/store/types/filter";
import useTransaction from "@/context/Transaction";
import {
  FILTER_TRANSACTIONS,
  TRANSACTION_MODAL
} from "@/application/store/types/transaction";
import { notify } from "@/components/lib/Notification";
import { FilterOptionType } from "@/application/domain/entities/general";
import { addDays } from "@/utils/format";
import { filterTxns } from "@/application/usecases/ui";

const FilterModalContent = ({
  showTypesOptions,
  showTypesOptionsHandler,
  showStatOptions,
  showStatOptionsHandler
}: FilterContentProps) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    endDate: null,
    startDate: null,
    period: ""
  });

  const { txnDispatch, txns, initData } = useTransaction();

  const txnTypeRef = useRef<HTMLButtonElement | null>(null);
  const txnStatRef = useRef<HTMLButtonElement | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log({ txns });

    const typeContent = txnTypeRef.current?.children[0].textContent || "";
    const statusContent = txnStatRef.current?.children[0].textContent || "";
    console.log({ typeContent, statusContent, filterState });

    if (
      !typeContent &&
      !statusContent &&
      !filterState.period &&
      !filterState.startDate
    ) {
      notify("Please select one of the filter options to proceed", "error");
      return;
    }

    if (!filterState.startDate && filterState.endDate) {
      notify("Please select a valid start date", "error");
      return;
    }

    if (filterState.startDate && !filterState.endDate) {
      notify("Please select a valid end date", "error");
      return;
    }

    const filterOptions: FilterOptionType = {};

    if (typeContent) {
      filterOptions["type"] = typeContent.toLowerCase();
    }

    if (statusContent) {
      filterOptions["status"] = statusContent.toLowerCase();
    }

    let startDate = "";
    let endDate = "";

    if (filterState.period) {
      const date = new Date();

      if (filterState.period === "Today") {
        startDate = addDays(Date.now(), 0);
        endDate = addDays(Date.now(), 0);
      } else if (filterState.period === "Last 7 days") {
        startDate = addDays(Date.now(), -14);
        endDate = addDays(Date.now(), 7);
      } else if (filterState.period === "This month") {
        startDate = addDays(
          new Date(date.setMonth(date.getMonth())),
          -date.getDate()
        );
        endDate = addDays(new Date(), 0);
      } else if (filterState.period === "Last 3 months") {
        startDate = addDays(new Date(date.setMonth(date.getMonth() - 3)), -7);
        endDate = addDays(Date.now(), 0);
      }
    }

    if (filterState.startDate) {
      startDate = filterState.startDate.toDateString();
      endDate = filterState.endDate?.toDateString() || "";
    }

    if (startDate && endDate) {
      filterOptions["range"] = `${startDate} - ${endDate}`;
    }

    const newTxns = filterTxns(initData, filterOptions);

    txnDispatch({
      type: FILTER_TRANSACTIONS,
      payload: {
        txns: newTxns,
        filters: Object.keys(filterOptions),
        range: `${startDate} - ${endDate}`
      }
    });

    filterDispatch({ type: FILTER_CLEAR });
    txnStatRef.current!.children[0].textContent = "";
    txnTypeRef.current!.children[0].textContent = "";
  };

  const onStartDateChange = useCallback(
    (date: Date) => {
      filterDispatch({
        type: FILTER_DATE,
        payload: { action: "startDate", date }
      });
    },
    [filterDispatch]
  );

  const onEndDateChange = useCallback(
    (date: Date) => {
      filterDispatch({
        type: FILTER_DATE,
        payload: { action: "endDate", date }
      });
    },
    [filterDispatch]
  );

  const onSelectPeriod = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLLabelElement;
      const index = Number(target.dataset.index || 0);
      filterDispatch({
        type: FILTER_DATE,
        payload: { action: "period", date: dateRange[index] }
      });
    },
    [filterDispatch]
  );

  const onClear = useCallback(() => {
    txnDispatch({ type: TRANSACTION_MODAL, payload: { isVisible: false } });
    filterDispatch({ type: FILTER_CLEAR });
  }, [txnDispatch, filterDispatch]);

  return (
    <section className="filter-content absolute left-0 top-0 h-full w-full px-[22px] pb-4 md:py-6">
      <form onSubmit={handleSubmit} className="h-full">
        <section className="flex flex-col gap-y-3 md:gap-y-6">
          <div className="flex flex-wrap gap-3">
            {dateRange.map((value, idx) => (
              <Badge
                key={value}
                index={idx}
                onClick={onSelectPeriod}
                title={value}
                selected={filterState.period === value}
              />
            ))}
          </div>
          <div>
            <label className="mb-3 inline-block text-base font-semibold leading-ll text-black-300">
              Date Range
            </label>
            <div className="flex items-center gap-x-[6px]">
              <DateTime
                selected={filterState.startDate}
                onChange={onStartDateChange}
              />
              <DateTime
                selected={filterState.endDate}
                onChange={onEndDateChange}
              />
            </div>
          </div>
          <CustomSelect
            options={transactionTypes}
            name="txn_type"
            label="Transaction Type"
            show={showTypesOptions}
            onOptionsShow={showTypesOptionsHandler}
            ref={txnTypeRef}
          />
          <CustomSelect
            options={transactionStat}
            name="txns_status"
            label="Transaction Status"
            show={showStatOptions}
            onOptionsShow={showStatOptionsHandler}
            ref={txnStatRef}
          />
        </section>
        <section className="flex w-full flex-col justify-end gap-4 md:flex-row md:items-end md:justify-normal">
          <PrimaryButton
            type="button"
            value="Clear"
            customClass="bg-white text-black-300 w-full border-gray-50"
            onClick={onClear}
          />
          <PrimaryButton
            value="Apply"
            type="submit"
            customClass="bg-gray-300 w-full text-white"
          />
        </section>
      </form>
    </section>
  );
};

export default FilterModalContent;
