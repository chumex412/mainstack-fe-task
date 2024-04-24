import Image from "next/image";
import { ComponentPropsWithoutRef, ReactElement, JSX, memo } from "react";
import { ButtonProps } from "@/application/domain/entities/ui";

type ButtonType = ButtonProps<JSX.Element> & ComponentPropsWithoutRef<"button">;

const BtnWithIcon = memo(function BtnWithIcon({
  label,
  customClass = "",
  icon,
  ...props
}: ButtonType) {
  return (
    <button
      className={`flex items-center justify-center gap-x-2.5 rounded-[100px] border bg-gray-50 px-[30px] py-3 text-sm font-semibold text-black-300 transition-colors duration-300 ${customClass}`}
      {...props}
    >
      {label}
      {icon ? <Image src={icon} className="h-6 w-6" alt="button icon" /> : null}
    </button>
  );
});

export default BtnWithIcon;
