import { ComponentPropsWithoutRef } from "react";
import { ButtonProps } from "@/application/domain/entities/ui";

type ButtonType = ButtonProps<null> & ComponentPropsWithoutRef<"button">;

const PrimaryButton = ({ customClass, value, ...props }: ButtonType) => {
  return (
    <button
      className={`rounded-[100px] border px-6 py-3 text-base font-semibold leading-ll transition-colors duration-300 ${customClass}`}
      {...props}
    >
      {value}
    </button>
  );
};

export default PrimaryButton;
