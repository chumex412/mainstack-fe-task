import Image from "next/image";
import { Transaction } from "@/application/domain/entities/ui";
import { callMadeIcon, callRecvIcon } from "../../../../public/assets/icons";
import "./transaction-item.css";
import { formatCurrency, getFormatedDate } from "@/utils/format";

const TransactionItem = ({
  title,
  type,
  name,
  status,
  amount,
  timestamp
}: Transaction) => {
  return (
    <article className="transaction-item gap-2">
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full ${name ? "bg-green-50" : "bg-red-50"} lg:h-12 lg:w-12`}
      >
        <Image
          src={name ? callRecvIcon : callMadeIcon}
          alt={name ? "Call made icon" : "Call received icon"}
        />
      </div>

      <div>
        <h4 className="mb-2 text-base font-medium capitalize leading-ll text-black-300">
          {title || type || ""}
        </h4>
        <p
          className={`text-sm font-medium capitalize leading-ll ${name ? "text-gray-400" : status === "pending" ? "text-orange-300" : "text-green-400"}`}
        >
          {name || status}
        </p>
      </div>

      <div>
        <strong>{formatCurrency(amount)}</strong>
        <p>{getFormatedDate(timestamp, "en-US")}</p>
      </div>
    </article>
  );
};

export default TransactionItem;
