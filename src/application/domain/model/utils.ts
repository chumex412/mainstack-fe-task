export const createDateFormatOptions = (
  day?: "numeric" | "2-digit",
  month?: "numeric" | "2-digit" | "long" | "short",
  year?: "numeric" | "2-digit",
  //weekday?: 'long' | 'short' | 'narrow',
  minute?: "numeric" | "2-digit",
  hour?: "numeric" | "2-digit"
): Intl.DateTimeFormatOptions => {
  const format = { year, month, day } as Intl.DateTimeFormatOptions;

  if (hour) format.hour = hour;

  if (minute) format.minute = minute;

  return format;
};
