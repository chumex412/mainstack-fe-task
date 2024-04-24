"use client";

import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState
} from "react";
import transactionReducer from "../application/store/reducers/transaction";
import {
  TransactionAction,
  TransactionContextValue,
  TransactionDataType
} from "@/application/domain/entities/general";
import { Transaction } from "@/application/domain/entities/ui";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@/application/services/request";
import { createNewTxnVals } from "@/application/domain/model/transaction";
import { init } from "next/dist/compiled/webpack/webpack";

const TransactionContext = createContext<
  TransactionContextValue<Transaction, Dispatch<TransactionAction<Transaction>>>
>({
  txns: [],
  initData: [],
  txnLoading: false,
  filters: { options: [], showModal: false, dateRange: "" },
  txnDispatch: () => {}
});

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [initTxnData, setInitTxnData] = useState<Transaction[]>();
  const [transactions, txnDispatch] = useReducer(transactionReducer, {
    txns: [],
    initData: [],
    txnLoading: false,
    filters: { options: [], showModal: false, dateRange: "" }
  });

  const { data, isLoading } = useQuery<TransactionDataType[] | undefined>({
    queryKey: ["transactions"],
    queryFn: () => getData("transactions")
  });

  useEffect(() => {
    if (data && !transactions.filters.options.length) {
      const txns = data
        .map((txnItem) => createNewTxnVals(txnItem))
        .sort((a, b) => {
          const dateA = new Date(a.timestamp).getTime();
          const dateB = new Date(b.timestamp).getTime();

          return dateA < dateB ? -1 : dateA > dateB ? 1 : 0;
        });

      if (!initTxnData?.length) {
        setInitTxnData(txns);
      }

      txnDispatch({ type: "transaction/all", payload: txns });
    }
  }, [data, transactions.filters.options, txnDispatch, initTxnData]);

  const cxtValue = useMemo(
    () => ({
      txns: transactions.txns,
      initData: initTxnData,
      txnLoading: isLoading,
      filters: transactions.filters,
      txnDispatch
    }),
    [transactions, txnDispatch, initTxnData, isLoading]
  );

  return (
    <TransactionContext.Provider value={cxtValue}>
      {children}
    </TransactionContext.Provider>
  );
};

const useTransaction = () => useContext(TransactionContext);

export default useTransaction;
