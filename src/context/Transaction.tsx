import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer
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

const TransactionContext = createContext<
  TransactionContextValue<Transaction, Dispatch<TransactionAction<Transaction>>>
>({
  txns: [],
  filters: { options: [], type: "", showModal: false },
  txnDispatch: () => {}
});

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, txnDispatch] = useReducer(transactionReducer, {
    txns: [],
    filters: { options: [], type: "", showModal: false }
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

      txnDispatch({ type: "transaction/all", payload: txns });
    }
  }, [data, transactions.filters.options, txnDispatch]);

  const cxtValue = useMemo(
    () => ({
      txns: transactions.txns,
      filters: transactions.filters,
      txnDispatch
    }),
    [transactions, txnDispatch]
  );

  return (
    <TransactionContext.Provider value={cxtValue}>
      {children}
    </TransactionContext.Provider>
  );
};

const useTransaction = () => useContext(TransactionContext);

export default useTransaction;
