import { FilterOptionType } from "../domain/entities/general";
import {
  OptionActionTypes,
  OptionsTypes,
  Transaction
} from "../domain/entities/ui";

export const getNextPrevOptionIndex = (
  currentIndex: number | null,
  options: OptionsTypes[],
  action: OptionActionTypes
): number => {
  if (currentIndex === null) return 0;

  if (currentIndex === options.length - 1 && action === "down") return 0;

  if (currentIndex === 0 && action === "up") return options.length - 1;

  if (action === "down") return currentIndex + 1;

  return currentIndex - 1;
};

export const filterTxns = (
  txns: Transaction[] = [],
  filterOptions: FilterOptionType
) => {
  const filteredTxns = [];
  const filteredIndices = [];

  for (let i = 0; i < txns.length; i += 1) {
    if (filterOptions.type && filterOptions.type === txns[i].type) {
      const types = filterOptions.type.split(",");

      if (types.includes(txns[i].type.toLowerCase())) {
        filteredTxns.push(txns[i]);
        filteredIndices.push(i);
      }
    }

    if (
      filterOptions.status &&
      !filteredIndices.includes(i) &&
      filterOptions.status === txns[i].status
    ) {
      const status = filterOptions.status.split(",");
      if (status.includes(txns[i].status?.toLowerCase() || "")) {
        filteredTxns.push(txns[i]);
        filteredIndices.push(i);
      }
    }

    if (filterOptions.range) {
      const [start, end] = filterOptions.range?.split(" - ");
      const startDate = new Date(start);
      const endDate = new Date(end);

      const txnDate = new Date(txns[i].timestamp);

      console.log(
        "date filter",
        startDate.getTime() >= txnDate.getTime() &&
          endDate.getTime() <= txnDate.getTime()
      );

      if (
        !filteredIndices.includes(i) &&
        txnDate.getTime() >= startDate.getTime() &&
        txnDate.getTime() <= endDate.getTime()
      ) {
        filteredTxns.push(txns[i]);
      }
    }
  }

  return filteredTxns;
};
