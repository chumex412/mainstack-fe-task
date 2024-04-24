"use client";

import { useQuery } from "@tanstack/react-query";
import { Balance, PayoutDetails } from "../pages/revenue";
import { getData } from "@/application/services/request";
import { PayoutDetailsType } from "@/application/domain/entities/general";
import { SkeletonLoader } from "../lib";

const PayoutDetailsContainer = () => {
  const { data, isLoading, error } = useQuery<PayoutDetailsType | undefined>({
    queryKey: ["wallet"],
    queryFn: () => getData("wallet")
  });

  return (
    <>
      {isLoading ? (
        <SkeletonLoader count={4} baseColor="#EFF1F6" width="100%" />
      ) : (
        <Balance balance={data?.balance || 0} />
      )}
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <PayoutDetails
          ledgerBal={data?.ledger_balance || 0}
          pendingPay={data?.pending_payout || 0}
          totalBal={data?.total_revenue || 0}
          totalPay={data?.total_payout || 0}
        />
      )}
    </>
  );
};

export default PayoutDetailsContainer;
