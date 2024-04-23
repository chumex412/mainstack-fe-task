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
