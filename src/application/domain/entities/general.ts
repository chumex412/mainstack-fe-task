type TransactionMetaData = {
  name: string;
  type: string;
  email: string;
  quantity: number;
  country: string;
  product_name: string;
};

export type TransactionDataType = {
  amount: number;
  type?: string;
  payment_reference?: string;
  status?: string;
  date: string;
  metadata?: TransactionMetaData;
};

type TransactionFilterAction<T> = {
  type: "transaction/filter";
  payload: T[];
};

type AllTransaction<T> = {
  type: "transaction/all";
  payload: T[];
};

type FilterOptionsTypes = "none" | "range" | "type" | "status";

export type TransactionAction<T> =
  | AllTransaction<T>
  | TransactionFilterAction<T>;

export type TransactionState<T> = {
  txns: T[];
  filterOptions: FilterOptionsTypes[];
};

export type PayoutDetailsType = {
  balance: number;
  ledger_balance: number;
  pending_payout: number;
  total_payout: number;
  total_revenue: number;
};

export interface GenericList<T> {
  list: T[];
}

export interface TransactionContextValue<S, T> {
  txns: S[];
  filters: FilterOptionsTypes[];
  txnDispatch: T;
}
