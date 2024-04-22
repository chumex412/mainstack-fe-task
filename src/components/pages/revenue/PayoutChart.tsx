"use client";

import { Chart } from "@/components/lib";
import { PrimaryButton } from "@/components/ui";
import { useState } from "react";

const PayoutChart = ({ data = [] }) => {
  const [balance, setBalance] = useState(0);

  console.log({ data });

  return (
    <section className="payout-chart w-full max-w-[770px]">
      <Chart data={[]} dataKey="" />
    </section>
  );
};

export default PayoutChart;
