import { TransactionHeaderProps } from "@/application/domain/entities/pages";
import { BtnWithIcon } from "@/components/ui";
import { downloadIcon, expandIcon } from "../../../../public/assets/icons";

const TransactionHeader = ({
  total,
  period,
  onOpen
}: TransactionHeaderProps) => {
  return (
    <section>
      <section className="flex items-center justify-between gap-x-4">
        <div>
          <h3 className="text-base font-bold leading-ll text-black-300">
            {total} Transaction{total > 1 ? "s" : ""}
          </h3>
          <p className="text-sm font-medium leading-ll text-gray-400">
            {period
              ? `Your transactions for the last ${period}`
              : "Your transactions"}
          </p>
        </div>
        <div className="flex items-center gap-x-3">
          <BtnWithIcon
            value="Filter"
            onClick={onOpen}
            type="button"
            icon={expandIcon}
          />
          <BtnWithIcon value="Export" icon={downloadIcon} />
        </div>
      </section>
    </section>
  );
};

export default TransactionHeader;
