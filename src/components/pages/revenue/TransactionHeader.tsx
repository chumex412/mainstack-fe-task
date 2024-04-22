import { TransactionHeaderProps } from "@/application/domain/entities/pages";
import { BtnWithIcon } from "@/components/ui";
import { downloadIcon, expandIcon } from "../../../../public/assets/icons";

const TransactionHeader = ({ total, period }: TransactionHeaderProps) => {
  return (
    <section>
      <section>
        <div>
          <h3>
            {total} Transaction{total > 1 ? "s" : ""}
          </h3>
          <p>Your transactions for the last {period}</p>
        </div>
        <div className="flex items-center gap-x-3">
          <BtnWithIcon value="Filter" type="button" icon={expandIcon} />
          <BtnWithIcon value="Export" icon={downloadIcon} />
        </div>
      </section>
    </section>
  );
};

export default TransactionHeader;
