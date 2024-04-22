import { Transaction } from "@/application/domain/entities/ui";
import Image from "next/image";
import { callMadeIcon, callRecvIcon } from "../../../../public/assets/icons";

const TransactionItem = ({
  title,
  name,
  status,
  amount,
  timestamp
}: Transaction) => {
  return (
    <article className="flex justify-between gap-2">
      <div>
        <Image
          src={name ? callMadeIcon : callRecvIcon}
          alt={name ? "Call made icon" : "Call received icon"}
        />
        <div>
          <h4>{title || ""}</h4>
          <p>{name || status}</p>
        </div>
      </div>
      <div>
        <strong>USD {amount}</strong>
        <p>{""}</p>
      </div>
    </article>
  );
};

export default TransactionItem;
