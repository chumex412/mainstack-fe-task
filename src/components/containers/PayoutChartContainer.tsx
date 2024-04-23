"use client";

import useTransaction from "@/context/Transaction";
import { PayoutChart } from "../pages/revenue";

const PayoutChartContainer = () => {
  const { txns } = useTransaction();

  return <PayoutChart data={txns} />;
};

export default PayoutChartContainer;
