import { BalanceProps } from "@/application/domain/entities/pages";
import { PrimaryButton } from "@/components/ui";
import { formatCurrency } from "@/utils/format";

const Balance = ({ balance }: BalanceProps) => {
  return (
    <section className="balance flex flex-col gap-x-16 md:flex-row">
      <div>
        <h2 className="mb-2.5 text-sm font-medium leading-ll text-gray-400">
          Available Balance
        </h2>
        <p className="text-2xl font-bold leading-sl text-black-300">
          <strong>{formatCurrency(balance)}</strong>
        </p>
      </div>
      <div className="md:self-end">
        <PrimaryButton
          value="Withdraw"
          customClass="bg-black-300 w-full md:w-auto text-white px-[52px]"
        />
      </div>
    </section>
  );
};

export default Balance;
