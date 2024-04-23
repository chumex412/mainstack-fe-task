"use client";

import {
  useState,
  useEffect,
  useCallback,
  forwardRef,
  SetStateAction,
  Dispatch,
  MouseEventHandler,
  KeyboardEventHandler,
  SyntheticEvent,
  useMemo
} from "react";
import { CustomSelectProps } from "../../../application/domain/entities/ui";
import { KEY_CODES } from "@/utils/constant";

import "./custom-select.css";
import { expandIcon } from "../../../../public/assets/icons";
import Image from "next/image";
import Dropdown from "../dropdown";

type InputRef = HTMLButtonElement;

const CustomSelect = forwardRef<InputRef, CustomSelectProps>(
  function CustomSelect(
    { options, name = "", label = "", error = "", show = false, onOptionsShow },
    ref
  ) {
    const [overlayTop, setOverlayTop] = useState<number>(0);
    const [highlightedIndex, setHighlightedIndex] = useState<number | null>(
      null
    );

    const isTrueRef = typeof ref !== "function";
    const asRefDep = isTrueRef ? ref?.current?.offsetHeight : 0;

    useEffect(() => {
      if (show && isTrueRef) {
        ref?.current?.children[1].classList.add("turn");
      } else if (!show && isTrueRef) {
        ref?.current?.children[1].classList.remove("turn");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show, ref]);

    useEffect(() => {
      if (isTrueRef) {
        setOverlayTop((ref?.current?.offsetHeight || 0) + 20);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [asRefDep]);

    const toggleDropdown: MouseEventHandler = useCallback(() => {
      onOptionsShow(!show);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show]);

    const onButtonKeydown: KeyboardEventHandler = (e) => {
      e.preventDefault();

      const keyCode = e.keyCode || e.key;

      if (
        [KEY_CODES.ENTER, KEY_CODES.SPACE, KEY_CODES.DOWN_ARROW].includes(
          keyCode
        )
      ) {
        onOptionsShow(true);

        highlightOption(0);
      }
    };

    const highlightOption = useCallback(
      (optionIndex: number | null) => {
        if (optionIndex !== null) setHighlightedIndex(optionIndex);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [highlightedIndex]
    );

    const handleSelect = useCallback(
      (e: SyntheticEvent, index: number) => {
        const elem = e.currentTarget as HTMLLIElement;
        const value = elem.dataset.value as string;

        if (!isTrueRef) return;

        const content = ref!.current!.children[0].textContent;
        const contentArr = content ? content?.split(",") : [];

        if (index === -1) {
          contentArr.push(value);
          ref!.current!.children[0].textContent = contentArr.join(",");
        } else {
          const newContent = contentArr
            .filter((_, idx) => idx !== index)
            .join(",");

          ref!.current!.children[0].textContent = newContent;
        }
      },
      [isTrueRef, ref]
    );

    return (
      <section className="custom-select-wrapper py-2">
        <label
          className="text-blac-300 mb-3 inline-block text-base font-semibold leading-ll"
          htmlFor={name}
        >
          {label}
        </label>
        <div className="custom-select-content relative">
          <button
            type="button"
            aria-controls="ds-select-list"
            aria-haspopup={true}
            className="select-btn flex w-full items-center justify-between rounded-lg border border-solid bg-gray-50 px-3 py-2.5 text-left text-sm"
            //name={name}
            //id={name}
            ref={ref}
            onClick={toggleDropdown}
            onKeyDown={onButtonKeydown}
          >
            <span></span>
            <Image src={expandIcon} className="caret" alt="Caret icon" />
          </button>
          <Dropdown
            options={options}
            name={name}
            type="select"
            onSelect={handleSelect}
            overlayTop={overlayTop}
            show={show}
            displayOptions={onOptionsShow}
            highlightedIndex={highlightedIndex}
            highlightOption={highlightOption}
          />
        </div>
        {/*{errors[name] && <small className="inline-block py-2.5 text-xs text-red-500">{errors[name].message}</small>}*/}
      </section>
    );
  }
);

export default CustomSelect;
