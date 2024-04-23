import { ChartProps } from "@/application/domain/entities/lib";
import { Transaction } from "@/application/domain/entities/ui";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis
} from "recharts";

const Chart = ({ data = [], dataKey, axisLabel }: ChartProps<Transaction>) => {
  return (
    <ResponsiveContainer width="100%" height={257}>
      <LineChart width={765} height={257} data={data}>
        <CartesianGrid
          horizontal={false}
          vertical={false}
          strokeDasharray="3 3"
        />
        <XAxis dataKey={axisLabel.x || ""} />
        <Tooltip />
        <Line
          dot={false}
          type="monotone"
          dataKey={dataKey}
          stroke="#FF5403"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
