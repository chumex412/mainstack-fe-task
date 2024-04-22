import { BalanceLabelProps } from "@/application/domain/entities/ui";

const BalanceLabel = ({ title, amount }: BalanceLabelProps) => {
  return (
    <article>
      <div>
        <h2 className="leading-sl mb-2.5 text-sm font-medium text-gray-400">
          {title}
        </h2>
        <p className="text-black-300 leading-sl text-xl font-bold">
          <strong>USD {amount}</strong>
        </p>
      </div>
    </article>
  );
};

export default BalanceLabel;
