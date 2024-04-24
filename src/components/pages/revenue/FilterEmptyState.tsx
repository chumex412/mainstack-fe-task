import Image from "next/image";
import { PrimaryButton } from "../../ui";
import { emptyFileIcon } from "../../../../public/assets/icons/index";
import useTransaction from "@/context/Transaction";
import { CLEAR_TRANSACTION_FILTER } from "@/application/store/types/transaction";
import { useCallback } from "react";

const FilterEmptyState = () => {
  const { txnDispatch } = useTransaction();

  const onClear = useCallback(() => {
    txnDispatch({ type: CLEAR_TRANSACTION_FILTER });
  }, [txnDispatch]);

  return (
    <section className="mx-auto w-full max-w-[370px] pt-8">
      <div className="mb-5">
        <Image src={emptyFileIcon} alt="Empty file icon" />
      </div>
      <div className="mb-8">
        <h3 className="mb-2.5 text-xl font-bold leading-ll text-black-300">
          Add your first product
        </h3>
        <p className="text-base font-medium leading-ll text-gray-400">
          You are a few steps away from making those sales. Let&apos;s add your
          first product so you can start selling.
        </p>
      </div>
      <PrimaryButton
        value="Clear filter"
        customClass="text-black-300 bg-gray-50"
        onClick={onClear}
      />
    </section>
  );
};

export default FilterEmptyState;
