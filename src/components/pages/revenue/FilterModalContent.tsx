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
import { FILTER_DATE } from "@/application/store/types/filter";
import useTransaction from "@/context/Transaction";
import { TRANSACTION_MODAL } from "@/application/store/types/transaction";
import { notify } from "@/components/lib/Notification";
import { FilterOptionType } from "@/application/domain/entities/general";
import { addDays } from "@/utils/format";

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

  const { txnDispatch } = useTransaction();

  const txnTypeRef = useRef<HTMLButtonElement | null>(null);
  const txnStatRef = useRef<HTMLButtonElement | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const typeContent = txnTypeRef.current?.children[0].textContent || "";
    const statusContent = txnStatRef.current?.children[0].textContent || "";

    if (
      !typeContent ||
      !statusContent ||
      !filterState.period ||
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

    if (filterState.period && filterState.startDate) {
      notify(
        "Select a single date range either from the badges above or the date inputs",
        "error"
      );
      return;
    }

    const filterOptions: FilterOptionType = {};

    if (typeContent) {
      filterOptions["type"] = typeContent;
    }

    if (statusContent) {
      filterOptions["status"] = statusContent;
    }

    let startDate = "";
    let endDate = "";

    if (filterState.period) {
      const date = new Date();

      if (filterState.period === "Today") {
        startDate = addDays(Date.now(), 0);
        endDate = addDays(Date.now(), 0);
      } else if (filterState.period === "Last 7days") {
        startDate = addDays(Date.now(), -14);
        endDate = addDays(Date.now(), 7);
      } else if (filterState.period === "This month") {
        startDate = addDays(
          new Date(date.setMonth(date.getMonth())),
          -date.getDate()
        );
        endDate = addDays(new Date(), 0);
      } else if (filterState.period === "Last 3months") {
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

    txnDispatch({ type: TRANSACTION_MODAL, payload: { isVisible: false } });
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

  return (
    <section className="filter-content absolute left-0 top-0 h-full w-full px-[22px] py-6">
      <form onSubmit={handleSubmit} className="h-full">
        <section className="flex flex-col gap-y-6">
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
        <section className="flex w-full items-end">
          <PrimaryButton
            type="button"
            value="Clear"
            customClass="bg-white text-black-300 w-full border-gray-50"
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
