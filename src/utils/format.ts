import { createDateFormatOptions } from "@/application/domain/model/utils";

export const formatCurrency = (
  amount = 0,
  currency = "USD",
  region = "en-US"
  // minimumFractionDigits = 0
) => {
  return new Intl.NumberFormat(region, {
    currency,
    style: "currency",
    currencyDisplay: "code"
  }).format(amount);
};

export const getFormatedDate = (
  date: Date | string | number | undefined,
  countCode: "en-NG" | "en-GB" | "en-US" = "en-NG"
) => {
  if (typeof date === "string" || typeof date === "number")
    date = new Date(date);

  if (typeof date === "undefined") date = new Date();

  return new Intl.DateTimeFormat(
    countCode,
    createDateFormatOptions("2-digit", "short", "numeric")
  ).format(date);
};

export function addDays(date: Date | string | number, days: number) {
  let result = new Date(date);

  result.setDate(result.getDate() + days);

  let month =
    result.getMonth() + 1 < 10
      ? "0" + (result.getMonth() + 1)
      : result.getMonth() + 1;

  let day = result.getDate() < 10 ? "0" + result.getDate() : result.getDate();
  let year = result.getFullYear();

  return [month, day, year].join("-");
}

export function calculateDaysBetweenDates(
  startDate: Date | string,
  endDate: Date | string
) {
  const oneDay = 24 * 60 * 60 * 1000;
  const start = new Date(startDate);
  const end = new Date(endDate);
  const differenceMs = Math.abs(end.getTime() - start.getTime());
  const daysDifference = Math.round(differenceMs / oneDay);
  return daysDifference;
}