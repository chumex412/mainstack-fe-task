import { ComponentPropsWithoutRef } from "react";
import { ButtonProps } from "@/application/domain/entities/ui";

type ButtonType = ButtonProps & ComponentPropsWithoutRef<"button">;

const PrimaryButton = ({ customClass, value, ...props }: ButtonType) => {
  return (
    <button
      className={`leading-ll rounded-[100px] border px-6 py-3 text-base font-semibold text-white transition-colors duration-300 ${customClass}`}
      {...props}
    >
      {value}
    </button>
  );
};

export default PrimaryButton;
