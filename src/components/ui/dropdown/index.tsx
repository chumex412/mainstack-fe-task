"use client";

import {
  useState,
  useEffect,
  useCallback,
  createRef,
  RefObject,
  KeyboardEvent,
  SyntheticEvent,
  memo,
  ReactNode
} from "react";
import Image from "next/image";
import { DropdownType } from "../../../application/domain/entities/ui";
import { KEY_CODES } from "@/utils/constant";
import { getNextPrevOptionIndex } from "@/application/usecases/ui";
import "./dropdown.css";

const Dropdown = memo(function Dropdown({
  type = "select",
  width,
  name,
  options,
  header,
  onSelect,
  show = false,
  displayOptions = (val: boolean) => null,
  overlayTop,
  highlightedIndex,
  highlightOption
}: DropdownType<(e: SyntheticEvent, idx: number) => void, ReactNode>) {
  const [selectedIndex, setSelectedIndex] = useState<number[]>([]);
  const [optionRefs, setOptionRefs] = useState<RefObject<HTMLLIElement>[]>(
    new Array(options.length).fill(null)
  );

  useEffect(() => {
    const newOptionRefs = options.map((_) => createRef<HTMLLIElement>());

    setOptionRefs(newOptionRefs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.length]);

  useEffect(() => {
    let ref: RefObject<HTMLLIElement> | null = null;

    if (highlightedIndex !== null && show) {
      ref = optionRefs[highlightedIndex];
    }

    if (ref && ref.current) {
      ref.current.focus();
    }
  }, [show, highlightedIndex, optionRefs]);

  const handleOptionSelect = useCallback(
    (e: SyntheticEvent, optionIndex: number) => {
      onSelect(e, selectedIndex.indexOf(optionIndex));

      setSelectedIndex((prevIndices) =>
        prevIndices.includes(optionIndex)
          ? prevIndices.filter((selectedIdx) => selectedIdx !== optionIndex)
          : prevIndices.concat([optionIndex])
      );

      if (type === "menu") displayOptions(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedIndex]
  );

  const onOptionSelect = useCallback(
    (e: KeyboardEvent) => {
      const key = e.keyCode || e.key;

      if (KEY_CODES.ESC === key) {
        displayOptions(false);

        return;
      }

      if (KEY_CODES.DOWN_ARROW === key) {
        highlightOption(
          getNextPrevOptionIndex(highlightedIndex, options, "down")
        );
      }

      if (KEY_CODES.UP === key) {
        highlightOption(
          getNextPrevOptionIndex(highlightedIndex, options, "up")
        );
      }

      if (KEY_CODES.ENTER === key) {
        if (highlightedIndex !== null) {
          handleOptionSelect(e, highlightedIndex);
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [highlightedIndex]
  );

  return (
    <div
      className={`ds-select__overylay absolute right-0 z-[10] w-full rounded-lg border border-solid bg-white shadow transition-opacity duration-500 ${
        show ? "visible opacity-100" : "invisible opacity-0"
      }`}
      style={{ width, top: overlayTop }}
      id="ds-select-list"
      role="menu"
    >
      <div
        className={`ds-select__options--wrapper ${type === "select" ? "h-[271px] p-2" : ""} overflow-auto`}
      >
        {header && type === "menu" ? header : null}
        <ul className={`w-full`}>
          {show ? (
            <>
              {options.map((option, indx) => {
                const isSelected = selectedIndex.includes(indx);
                const isHighlighted = highlightedIndex === indx;

                const ref = optionRefs[indx];

                const { value, label, icon } = option;

                return (
                  <>
                    <li
                      className={`ds-select__option flex items-center gap-x-3 ${
                        isSelected ? "ds-select__option--selected" : "text-dark"
                      } ${isHighlighted ? "ds-select__option--highlighted" : ""} ${type === "select" ? "p-3.5" : "ds-menu__item p-2.5"}  text-sm`}
                      key={indx + 1}
                      role="menuitemradio"
                      aria-checked={isSelected ? true : undefined}
                      aria-label={`${label}`}
                      onClick={(e: SyntheticEvent) =>
                        handleOptionSelect(e, indx)
                      }
                      onMouseEnter={() => highlightOption(indx)}
                      onMouseLeave={() => highlightOption(null)}
                      onKeyDown={onOptionSelect}
                      data-value={value || ""}
                      ref={ref}
                      tabIndex={isHighlighted ? -1 : 0}
                    >
                      {type === "select" ? (
                        <>
                          <input
                            type="checkbox"
                            checked={isSelected}
                            name={name}
                          />{" "}
                          <strong className="text-base leading-ll text-black-300">
                            {label}
                          </strong>
                        </>
                      ) : (
                        <>
                          <Image src={icon || ""} alt={`${label} icon`} />
                          <strong className="text-sm font-semibold leading-ll  text-black-300">
                            {label}
                          </strong>
                        </>
                      )}
                    </li>
                  </>
                );
              })}
            </>
          ) : null}
        </ul>
      </div>
    </div>
  );
});

export default Dropdown;
