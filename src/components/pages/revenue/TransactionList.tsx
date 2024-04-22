import { GenericList } from "@/application/domain/entities/general";
import { Transaction } from "@/application/domain/entities/ui";
import { TransactionItem } from "@/components/ui";

const TransactionList = ({ list }: GenericList<Transaction>) => {
  return (
    <section className="flex flex-col gap-x-4">
      {list.map((item) => (
        <TransactionItem
          key={item.title}
          title={item.title}
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
