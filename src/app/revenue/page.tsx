import { TransactionContainer } from "@/components/containers";
import { Payout } from "@/components/pages/revenue";
import "@/styles/revenue.css";

export default function Revenue() {
  return (
    <main>
      <Payout />
      <TransactionContainer />
    </main>
  );
}
