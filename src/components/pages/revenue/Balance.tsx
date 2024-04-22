import { BalanceProps } from "@/application/domain/entities/pages";
import { PrimaryButton } from "@/components/ui";

const Balance = ({ balance }: BalanceProps) => {
  return (
    <section className="balance flex gap-x-16">
      <div>
        <h2 className="leading-ll mb-2.5 text-sm font-medium text-gray-400">
          Available Balance
        </h2>
        <p className="leading-sl text-black-300 text-2xl font-bold">
          USD <strong>{balance}</strong>
        </p>
      </div>
      <div className="self-end">
        <PrimaryButton value="Withdraw" customClass="bg-black-300 px-[52px]" />
      </div>
    </section>
  );
};

export default Balance;
