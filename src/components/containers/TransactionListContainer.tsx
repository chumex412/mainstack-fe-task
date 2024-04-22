import { useQuery } from "@tanstack/react-query";
import { TransactionList } from "../pages/revenue";
import { getData } from "@/application/services/request";
import { Transaction } from "@/application/domain/entities/ui";
import useTransaction from "@/context/Transaction";

const TransactionListContainer = () => {
  const { txns } = useTransaction();

  return <TransactionList list={txns} />;
};

export default TransactionListContainer;
