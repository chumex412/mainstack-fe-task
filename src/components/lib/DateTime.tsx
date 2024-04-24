import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import { memo } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { CustomDateTime } from "@/application/domain/entities/lib";

type DateTimePickerProps = CustomDateTime & ReactDatePickerProps;

const DateTime = memo(function DateTime({
  type = "date",
  alreadyBooked = [],
  ...props
}: DateTimePickerProps) {
  let dateProps: DateTimePickerProps = {
    ...props
  };

  if (type === "date-time" || type === "time") {
    dateProps.showTimeSelect = true;
    dateProps.timeIntervals = 15;
    dateProps.timeFormat = "HH:mm";
    dateProps.timeClassName = () => "date-time";
  }

  if (type === "time") {
    dateProps.excludeTimes = alreadyBooked;
    dateProps.showTimeSelectOnly = true;
    dateProps.timeCaption = "Time";
    dateProps.dateFormat = "h:mm aa";
  }

  if (type === "date-time") {
    dateProps.timeCaption = "time";
    dateProps.dateFormat = "MMMM d, yyyy h:mm aa";
  }

  if (type === "date") {
    dateProps.excludeDates = alreadyBooked;
  }

  return (
    <div className="w-full">
      <DatePicker
        className="w-full rounded-xl bg-gray-50 px-4 py-3"
        calendarClassName="pp-date-picker"
        {...dateProps}
      />
    </div>
  );
});

export default DateTime;
