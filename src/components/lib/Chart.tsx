import { ChartProps } from "@/application/domain/entities/lib";
import { CartesianGrid, Line, LineChart, ResponsiveContainer } from "recharts";

const Chart = ({ data = [], dataKey }: ChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={257}>
      <LineChart width={765} height={257} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <Line
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
