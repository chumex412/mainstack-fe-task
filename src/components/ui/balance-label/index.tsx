import { BalanceLabelProps } from "@/application/domain/entities/ui";
import { formatCurrency } from "@/utils/format";
import InfoIcon from "../../../../public/assets/icons/info.svg";

const BalanceLabel = ({ title, amount }: BalanceLabelProps) => {
  return (
    <article className="flex justify-between">
      <div>
        <h2 className="mb-2.5 text-sm font-medium leading-sl text-gray-400">
          {title}
        </h2>
        <p className="text-xl font-bold leading-sl text-black-300">
          <strong>{formatCurrency(amount)}</strong>
        </p>
      </div>
      <InfoIcon />
    </article>
  );
};

export default BalanceLabel;
