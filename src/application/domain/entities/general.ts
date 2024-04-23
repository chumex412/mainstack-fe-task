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

type FilterActionPayload<T> = {
  txns: T[];
  filters: {
    option: FilterOptionsTypes;
    type: string;
  };
};

type TransactionFilterAction<T> = {
  type: "transaction/filter";
  payload: FilterActionPayload<T>;
};

type AllTransaction<T> = {
  type: "transaction/all";
  payload: T[];
};

type FilterOptionsTypes = "none" | "range" | "type" | "status";

type FiltersType = {
  options: FilterOptionsTypes[];
  type: string;
  showModal: boolean;
};

type ModalPayload = {
  isVisible: boolean;
};

type TransactionModalAction = {
  type: "transaction/modal";
  payload: ModalPayload;
};

export type TransactionAction<T> =
  | AllTransaction<T>
  | TransactionFilterAction<T>
  | TransactionModalAction;

export type TransactionState<T> = {
  txns: T[];
  filters: FiltersType;
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
  filters: FiltersType;
  txnDispatch: T;
}

export interface ReactPortalProps<T> {
  children: T;
  wrapperId: string;
}
