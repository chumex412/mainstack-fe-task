import { getFormatedDate } from "@/utils/format";
import { TransactionDataType } from "../entities/general";
import { Transaction } from "../entities/ui";

export const createNewTxnVals = (
  transaction: TransactionDataType
): Transaction => {
  return {
    name: transaction?.metadata?.name || "",
    title: transaction?.metadata?.product_name || transaction.type || "",
    status: transaction.status,
    amount: transaction.amount,
    timestamp: getFormatedDate(transaction.date, "en-US")
  };
};
