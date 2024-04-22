"use client";

import { useQuery } from "@tanstack/react-query";
import { Balance, PayoutDetails } from "../pages/revenue";
import { getData } from "@/application/services/request";

const PayoutDetailsContainer = () => {
  const { data, isLoading, error } = useQuery<PayoutDetailsType | undefined>({
    queryKey: ["wallet"],
    queryFn: () => getData("wallet")
  });

  if (error) return null;

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Balance balance={data?.balance || 0} />
      <PayoutDetails
        ledgerBal={data?.ledger_balance || 0}
        pendingPay={data?.pending_payout || 0}
        totalBal={data?.total_revenue || 0}
        totalPay={data?.total_payout || 0}
      />
    </>
  );
};

export default PayoutDetailsContainer;
