"use client";

import {
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
          period={filters.options.includes("range") ? filters.type : ""}
          onOpen={onOpen}
        />
        <TransactionList list={txns} />
      </div>
      <FilterModal />
    </section>
  );
};

export default TransactionContainer;
