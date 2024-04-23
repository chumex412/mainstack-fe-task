import { OptionActionTypes, OptionsTypes } from "../domain/entities/ui";

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
