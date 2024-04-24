import { GenericList } from "@/application/domain/entities/general";
import { Transaction } from "@/application/domain/entities/ui";
import { TransactionItem } from "@/components/ui";

const TransactionList = ({ list }: GenericList<Transaction>) => {
  return (
    <section className="flex flex-col gap-y-6">
      {list.map((item, idx) => (
        <TransactionItem
          key={item.title || "" + idx}
          title={item.title || ""}
          type={item.type || ""}
          timestamp={item.timestamp}
          amount={item.amount}
          name={item.name}
          status={item.status}
        />
      ))}
    </section>
  );
};

export default TransactionList;
