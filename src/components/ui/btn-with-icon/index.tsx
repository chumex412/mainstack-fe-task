import { ButtonProps } from "@/application/domain/entities/ui";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";

type ButtonType = ButtonProps & ComponentPropsWithoutRef<"button">;

const BtnWithIcon = ({
  value = "",
  customClass = "text-white border border-white",
  icon
}: ButtonType) => {
  return (
    <button
      className={`text-black-300 flex items-center gap-x-2.5 rounded-[100px] border bg-gray-50 px-[30px] py-3 text-sm font-semibold transition-colors duration-300 ${customClass}`}
    >
      {icon ? <Image src={icon} className="h-6 w-6" alt="button icon" /> : null}

      {value}
    </button>
  );
};

export default BtnWithIcon;
