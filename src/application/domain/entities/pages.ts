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
  period: string;
}

export interface TransactionListProps {
  list: Transaction[];
}
