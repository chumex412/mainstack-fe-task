import { BadgeProps } from "@/application/domain/entities/ui";
import { MouseEvent, memo } from "react";

const Badge = memo(function Badge({
  title,
  index,
  selected,
  onClick
}: BadgeProps<MouseEvent>) {
  return (
    <label
      className={`inline-block rounded-[100px] border border-gray-50 px-4 py-2.5 text-sm font-semibold leading-ll ${selected ? "bg-black-300 text-white" : "bg-white text-black-300"}`}
      data-index={index}
      onClick={onClick}
    >
      {title}
    </label>
  );
});

export default Badge;
