"use client";

import {
  FilterEmptyState,
  FilterModal,
  TransactionHeader,
  TransactionList
} from "../pages/revenue";
import useTransaction from "@/context/Transaction";
import { useCallback } from "react";
import { TRANSACTION_MODAL } from "@/application/store/types/transaction";

const TransactionContainer = () => {
  const { txns, filters, txnDispatch } = useTransaction();

  const onOpen = useCallback(() => {
    txnDispatch({ type: TRANSACTION_MODAL, payload: { isVisible: true } });
  }, [txnDispatch]);

  return (
    <section className="container py-10">
      <div className="mx-auto flex w-full max-w-[1159px] flex-col gap-y-8">
        <TransactionHeader
          total={txns.length}
          filters={filters.options.length}
          period={filters.options.includes("range") ? filters.dateRange : ""}
          onOpen={onOpen}
        />
        <section className="pb-6">
          {txns.length ? <TransactionList list={txns} /> : <FilterEmptyState />}
        </section>
      </div>
      <FilterModal />
    </section>
  );
};

export default TransactionContainer;
