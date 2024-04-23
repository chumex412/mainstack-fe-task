"use client";

import { MouseEvent, useCallback, useMemo, useState } from "react";
import { ReactPortal } from "@/components/containers";
import { Modal } from "@/components/ui";
import useTransaction from "@/context/Transaction";
import { TRANSACTION_MODAL } from "@/application/store/types/transaction";
import FilterModalContent from "./FilterModalContent";

const FilterModal = () => {
  const [showTxnType, setShowTxnType] = useState(false);
  const [showStat, setShowStat] = useState(false);

  const { txnDispatch, filters } = useTransaction();

  const onClose = useCallback(() => {
    setShowTxnType(false);
    setShowStat(false);
    txnDispatch({ type: TRANSACTION_MODAL, payload: { isVisible: false } });
  }, [txnDispatch]);

  const showOptionsHandler = useCallback(
    (val: boolean) => {
      setShowTxnType(val);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [showTxnType]
  );

  const showStatOptnsHandler = useCallback(
    (val: boolean) => {
      setShowStat(val);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [showStat]
  );

  const header = useMemo(() => {
    return (
      <h4 className="text-lg font-bold leading-sl text-black-300">Filter</h4>
    );
  }, []);

  return (
    <section
      onClick={(e: MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement;

        if (!target.closest(".custom-select-content")) {
          setShowTxnType(false);
          setShowStat(false);
        }
      }}
    >
      <ReactPortal wrapperId="transacttion-filter-modal">
        <Modal
          show={filters.showModal}
          modalHeader={header}
          width={456}
          onClose={onClose}
        >
          <FilterModalContent
            showTypesOptions={showTxnType}
            showTypesOptionsHandler={showOptionsHandler}
            showStatOptions={showStat}
            showStatOptionsHandler={showStatOptnsHandler}
          />
        </Modal>
      </ReactPortal>
    </section>
  );
};

export default FilterModal;
