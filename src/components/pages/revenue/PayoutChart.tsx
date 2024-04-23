"use client";

import { useState } from "react";
import { Transaction } from "@/application/domain/entities/ui";
import { Chart } from "@/components/lib";

const PayoutChart = ({ data = [] }: { data: Transaction[] }) => {
  const [balance, setBalance] = useState(0);

  return (
    <section className="payout-chart w-full max-w-[770px]">
      <Chart data={data} dataKey="amount" axisLabel={{ x: "timestamp" }} />
    </section>
  );
};

export default PayoutChart;
