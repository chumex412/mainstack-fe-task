import {
  TransactionAction,
  TransactionState
} from "@/application/domain/entities/general";
import { Transaction } from "@/application/domain/entities/ui";

export default function reducer(
  state: TransactionState<Transaction>,
  action: TransactionAction<Transaction>
) {
  return state;
}
