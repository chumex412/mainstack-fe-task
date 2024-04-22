"use client";

import { Chart } from "@/components/lib";
import { PrimaryButton } from "@/components/ui";
import { useState } from "react";

const PayoutChart = ({ data = [] }) => {
  const [balance, setBalance] = useState(0);

  console.log({ data });

  return (
    <section className="w-full max-w-[890px]">
      <div>
        <section className="flex gap-x-16">
          <div>
            <h2 className="leading-ll mb-2.5 text-sm font-medium text-gray-400">
              Available Balance
            </h2>
            <p className="leading-sl text-black-300 text-2xl font-bold">
              USD <strong>{balance}</strong>
            </p>
          </div>
          <div className="self-end">
            <PrimaryButton
              value="Withdraw"
              customClass="bg-black-300 px-[52px]"
            />
          </div>
        </section>
        <section>
          <Chart data={[]} dataKey="" />
        </section>
      </div>
    </section>
  );
};

export default PayoutChart;
