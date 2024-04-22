import {
  PayoutChartContainer,
  PayoutDetailsContainer
} from "@/components/containers";
import React from "react";

const Payout = () => {
  return (
    <section className="container flex flex-col justify-between gap-5 py-16 lg:flex-row">
      <PayoutChartContainer />
      <PayoutDetailsContainer />
    </section>
  );
};

export default Payout;
