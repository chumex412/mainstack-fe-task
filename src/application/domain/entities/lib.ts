type Axis = {
  x?: string;
  y?: string;
};

export interface ChartProps<T> {
  data: T[];
  dataKey: string;
  axisLabel: Axis;
}

export interface CustomDateTime {
  type?: "date" | "time" | "date-time";
  alreadyBooked?: Date[];
}
