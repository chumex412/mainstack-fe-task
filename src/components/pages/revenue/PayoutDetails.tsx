import { PayoutDetailsProps } from "@/application/domain/entities/pages";
import { BalanceLabel } from "@/components/ui";

const PayoutDetails = ({
  ledgerBal,
  totalPay,
  totalBal,
  pendingPay
}: PayoutDetailsProps) => {
  return (
    <section className="flex w-full max-w-[271px] flex-col gap-y-8">
      <BalanceLabel title="Ledger Balance" amount={ledgerBal} />
      <BalanceLabel title="Total Payout" amount={totalPay} />
      <BalanceLabel title="Total Balance" amount={totalBal} />
      <BalanceLabel title="Pending Payout" amount={pendingPay} />
    </section>
  );
};

export default PayoutDetails;
