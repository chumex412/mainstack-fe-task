import {
  PayoutChartContainer,
  PayoutDetailsContainer
} from "@/components/containers";

const Payout = () => {
  return (
    <section className="container flex flex-col gap-5 py-16 lg:flex-row">
      <section className="payout-main">
        <PayoutChartContainer />
        <PayoutDetailsContainer />
      </section>
    </section>
  );
};

export default Payout;
