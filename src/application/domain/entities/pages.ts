export type PayoutDetailsProps = {
  ledgerBal: number;
  totalPay: number;
  totalBal: number;
  pendingPay: number;
};

type Transaction = {
  amount: number;
  title: string;
  name: string;
  status: string;
  timestamp: Date | string;
};

export interface BalanceProps {
  balance: number;
}

export interface TransactionHeaderProps {
  total: number;
  filters: number;
  period: string;
  onOpen: () => void;
}

export interface TransactionListProps {
  list: Transaction[];
}

export interface FilterContentProps {
  showTypesOptions: boolean;
  showTypesOptionsHandler: (val: boolean) => void;
  showStatOptions: boolean;
  showStatOptionsHandler: (val: boolean) => void;
}