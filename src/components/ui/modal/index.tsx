"use client";

import { ReactNode, useEffect } from "react";
import Image from "next/image";
import { KEY_CODES } from "@/utils/constant";
import { ModalProps } from "@/application/domain/entities/ui";

import { closeIcon } from "../../../../public/assets/icons";
import "./modal.css";

const Modal = ({
  children,
  show,
  width = 767,
  zIndex = 50,
  modalHeader,
  onClose
}: ModalProps<ReactNode>) => {
  useEffect(() => {
    const onPressEscapeKey = (e: KeyboardEvent) => {
      const key = e.keyCode || e.key;

      if (key === KEY_CODES.ESC) {
        onClose();
      }
    };

    if (show) {
      document.body.addEventListener("keydown", onPressEscapeKey);

      return () => {
        document.body.removeEventListener("keydown", onPressEscapeKey);
      };
    }
  }, [onClose, show]);

  useEffect(() => {
    const body = document.body;

    if (show) {
      body.classList.add("modal-open");

      return () => {
        body.classList.remove("modal-open");
      };
    }
  }, [show]);

  return (
    <>
      <section
        className={`modal-overlay ${show ? "show-modal" : ""}`}
        style={{ zIndex }}
      >
        <section
          className={`modal ${show ? "show-modal" : ""} relative h-auto bg-white p-4 lg:px-0 lg:py-0`}
          style={{ width: width + "px" }}
        >
          <section className="modal-header w-full items-center justify-between gap-x-4 px-4 py-5 lg:px-6">
            {modalHeader}
            <button onClick={onClose} className="">
              <Image src={closeIcon} alt="Close icon" />
            </button>
          </section>
          <section className="modal-content">{children}</section>
        </section>
      </section>
    </>
  );
};

export default Modal;
