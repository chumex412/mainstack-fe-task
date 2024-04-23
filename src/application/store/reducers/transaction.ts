import {
  TransactionAction,
  TransactionState
} from "@/application/domain/entities/general";
import { Transaction } from "@/application/domain/entities/ui";
import {
  ALL_TRANSACTIONS,
  FILTER_TRANSACTIONS,
  TRANSACTION_MODAL
} from "../types/transaction";

export default function reducer(
  state: TransactionState<Transaction>,
  action: TransactionAction<Transaction>
) {
  if (action.type === ALL_TRANSACTIONS) {
    return { ...state, txns: action.payload };
  }

  if (action.type === FILTER_TRANSACTIONS) {
    const filters = {
      ...state.filters,
      options: state.filters.options.concat([action.payload.filters.option]),
      type: action.payload.filters.type
    };

    return { ...state, txns: action.payload.txns, filters };
  }

  if (action.type === TRANSACTION_MODAL) {
    return {
      ...state,
      filters: { ...state.filters, showModal: action.payload.isVisible }
    };
  }

  return state;
}
