import {
  TransactionAction,
  TransactionState
} from "@/application/domain/entities/general";
import { Transaction } from "@/application/domain/entities/ui";
import {
  ALL_TRANSACTIONS,
  CLEAR_TRANSACTION_FILTER,
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
      options: action.payload.filters,
      showModal: false
    };

    return { ...state, txns: action.payload.txns, filters };
  }

  if (action.type === TRANSACTION_MODAL) {
    return {
      ...state,
      filters: { ...state.filters, showModal: action.payload.isVisible }
    };
  }

  if (action.type === CLEAR_TRANSACTION_FILTER) {
    return { ...state, filters: { ...state.filters, options: [] } };
  }

  return state;
}
