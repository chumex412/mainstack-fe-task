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
import { createNewTransaction } from "@/application/domain/model/transaction";

const TransactionContext = createContext<
  TransactionContextValue<Transaction, Dispatch<TransactionAction<Transaction>>>
>({ txns: [], filters: [], txnDispatch: () => {} });

export const TransactionProvider = ({}: { children: ReactNode }) => {
  const [transactions, txnDispatch] = useReducer(transactionReducer, {
    txns: [],
    filterOptions: []
  });

  const { data, isLoading, isError } = useQuery<
    TransactionDataType[] | undefined
  >({
    queryKey: ["transactions"],
    queryFn: () => getData("transactions")
  });

  useEffect(() => {
    if (data && !transactions.filterOptions.length) {
      const txns = data.map((txnItem) => createNewTransaction(txnItem));

      txnDispatch({ type: "transaction/all", payload: txns });
    }
  }, [data, transactions.filterOptions, txnDispatch]);

  const cxtValue = useMemo(
    () => ({
      txns: transactions.txns,
      filters: transactions.filterOptions,
      txnDispatch
    }),
    [transactions, txnDispatch]
  );

  return (
    <TransactionContext.Provider value={cxtValue}></TransactionContext.Provider>
  );
};

const useTransaction = () => useContext(TransactionContext);

export default useTransaction;
