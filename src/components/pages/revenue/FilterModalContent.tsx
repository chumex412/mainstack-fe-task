"use client";

import { FormEvent, useRef } from "react";
import { CustomSelect } from "@/components/ui";
import { FilterContentProps } from "@/application/domain/entities/pages";
import {
  transactionStat,
  transactionTypes
} from "@/application/data/transactions";

const FilterModalContent = ({
  showTypesOptions,
  showTypesOptionsHandler,
  showStatOptions,
  showStatOptionsHandler
}: FilterContentProps) => {
  const txnTypeRef = useRef<HTMLButtonElement | null>(null);
  const txnStatRef = useRef<HTMLButtonElement | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="h-full px-[22px] py-6">
      <form onSubmit={handleSubmit}>
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
      </form>
    </section>
  );
};

export default FilterModalContent;
