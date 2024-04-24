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

export type UserData = {
  first_name: string;
  last_name: string;
  email: string;
};

type FilterDateAction = {
  type: "filter/date";
  payload: { date: Date | string; action: "startDate" | "endDate" | "period" };
};

type FilterClearAction = {
  type: "filter/clear";
};

export type FilterAction = FilterDateAction | FilterClearAction;

export type FilterState = {
  endDate: Date | null;
  startDate: Date | null;
  period: string;
};

type FilterActionPayload<T> = {
  txns: T[];
  filters: string[];
  range: string;
};

type TxnFilterOptionsTypes = "range" | "type" | "status";

type TxnFiltersType = {
  options: string[];
  showModal: boolean;
  dateRange: string;
};

export type FilterOptionType = {
  status?: string;
  range?: string;
  type?: string;
};

type ModalPayload = {
  isVisible: boolean;
};

type TransactionFilterAction<T> = {
  type: "transaction/filter";
  payload: FilterActionPayload<T>;
};

type AllTransaction<T> = {
  type: "transaction/all";
  payload: T[];
};

type ClearFilterAction = {
  type: "transaction/filter/clear";
};

type TransactionModalAction = {
  type: "transaction/modal";
  payload: ModalPayload;
};

export type TransactionAction<T> =
  | AllTransaction<T>
  | TransactionFilterAction<T>
  | TransactionModalAction
  | ClearFilterAction;

export type TransactionState<T> = {
  txns: T[];
  txnLoading: boolean;
  initData: T[];
  filters: TxnFiltersType;
};

export type PayoutDetailsType = {
  balance: number;
  ledger_balance: number;
  pending_payout: number;
  total_payout: number;
  total_revenue: number;
};

type KeyboardKeys = {
  ENTER: number | string;
  SPACE: number | string;
  DOWN_ARROW: number | string;
  UP: number | string;
  ESC: number | string;
};

export interface Constants {
  timeout: ReturnType<typeof setTimeout>;
  timerInterval: ReturnType<typeof setInterval>;
  keyboardKeys: KeyboardKeys;
}

export interface GenericList<T> {
  list: T[];
}

export interface TransactionContextValue<S, T> {
  txns: S[];
  initData: S[] | undefined;
  txnLoading: boolean;
  filters: TxnFiltersType;
  txnDispatch: T;
}

export interface ReactPortalProps<T> {
  children: T;
  wrapperId: string;
}
