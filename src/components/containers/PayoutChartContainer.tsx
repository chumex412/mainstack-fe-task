"use client";

import useTransaction from "@/context/Transaction";
import { PayoutChart } from "../pages/revenue";
import { SkeletonLoader } from "../lib";

const PayoutChartContainer = () => {
  const { txns, txnLoading } = useTransaction();

  return (
    <>
      {txnLoading ? (
        <SkeletonLoader count={5} />
      ) : (
        <PayoutChart
          data={
            txns.length
              ? txns
              : [{ timestamp: "", amount: 0, title: "", type: "" }]
          }
        />
      )}
    </>
  );
};

export default PayoutChartContainer;
