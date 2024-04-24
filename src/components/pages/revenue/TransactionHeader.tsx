"use client";

import { useEffect, useMemo, useState } from "react";
import { TransactionHeaderProps } from "@/application/domain/entities/pages";
import { BtnWithIcon } from "@/components/ui";
import { downloadIcon, expandIcon } from "../../../../public/assets/icons";
import { calculateDaysBetweenDates } from "@/utils/format";

const TransactionHeader = ({
  total,
  period,
  filters,
  onOpen
}: TransactionHeaderProps) => {
  const [range, setRange] = useState(0);

  useEffect(() => {
    if (period) {
      const [start, end] = period.split(" - ");

      const startDate = new Date(start);
      const endDate = new Date(end);
      console.log({ startDate, endDate });

      setRange(calculateDaysBetweenDates(startDate, endDate));
    }
  }, [period]);

  const label = useMemo(
    () => (
      <span className="inline-flex items-center gap-x-[2px]">
        Filter{" "}
        {filters ? (
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black-300 text-[12px] leading-3 text-white">
            {filters}
          </span>
        ) : (
          ""
        )}
      </span>
    ),
    [filters]
  );

  return (
    <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="text-center md:text-left">
        <h3 className="text-base font-bold leading-ll text-black-300">
          {total} Transaction{total > 1 ? "s" : ""}
        </h3>
        <p className="text-sm font-medium leading-ll text-gray-400">
          {period
            ? `Your transactions for the last ${range}`
            : "Your transactions for All Time"}
        </p>
      </div>
      <div className="flex flex-col items-stretch  gap-3 md:flex-row md:items-center">
        <BtnWithIcon
          label={label}
          onClick={onOpen}
          type="button"
          icon={expandIcon}
        />
        <BtnWithIcon label="Export" icon={downloadIcon} />
      </div>
    </section>
  );
};

export default TransactionHeader;
