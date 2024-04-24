import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { PayoutDetails } from "@/components/pages/revenue";

describe("Payout detail", function () {
  const payoutData = {
    balance: 750.56,
    total_payout: 500,
    total_revenue: 1250.56,
    pending_payout: 0,
    ledger_balance: 500
  };

  it("Render payout details", function () {
    render(
      <PayoutDetails
        ledgerBal={payoutData.ledger_balance || 0}
        pendingPay={payoutData.pending_payout || 0}
        totalBal={payoutData.total_revenue || 0}
        totalPay={payoutData.total_payout || 0}
      />
    );

    // const sectionContainer = screen.
  });
});
