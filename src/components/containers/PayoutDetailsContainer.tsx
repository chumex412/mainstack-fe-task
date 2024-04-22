import { PayoutDetails } from "../pages/revenue";

const PayoutDetailsContainer = () => {
  return (
    <>
      <PayoutDetails ledgerBal={0} pendingPay={0} totalBal={0} totalPay={0} />
    </>
  );
};

export default PayoutDetailsContainer;
