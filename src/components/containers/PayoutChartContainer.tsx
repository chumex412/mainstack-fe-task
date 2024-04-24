"use client";

import useTransaction from "@/context/Transaction";
import { PayoutChart } from "../pages/revenue";

const PayoutChartContainer = () => {
  const { txns } = useTransaction();

  return (
    <PayoutChart
      data={
        txns.length ? txns : [{ timestamp: "", amount: 0, title: "", type: "" }]
      }
    />
  );
};

export default PayoutChartContainer;
