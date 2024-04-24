"use client";

import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import Image from "next/image";
import Dropdown from "../dropdown";
import { MenuButtonProps } from "@/application/domain/entities/ui";
import { menuIcon } from "../../../../public/assets/icons";
import { menuOptions } from "@/application/data/links";

const MenuButton = ({ firstName, lastName, email }: MenuButtonProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [overlayTop, setOverlayTop] = useState(0);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  const menuBtnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOverlayTop((menuBtnRef?.current?.offsetHeight || 0) + 10);
  }, [menuBtnRef.current?.offsetHeight]);

  const toggleDropdown: MouseEventHandler = useCallback(() => {
    setShowMenu((prev) => !prev);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const highlightOption = useCallback(
    (optionIndex: number | null) => {
      if (optionIndex !== null) setHighlightedIndex(optionIndex);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [highlightedIndex]
  );

  const selectHandler = useCallback(() => {
    setShowMenu(false);
  }, []);

  const onMenuDisplay = useCallback((val: boolean) => {
    setShowMenu(val);
  }, []);

  const menuHeader = useMemo(() => {
    return (
      <div className="flex items-center gap-x-4 px-2.5 py-3">
        <strong className="flex h-8 w-8 items-center justify-center rounded-full bg-c-gradient text-sm uppercase leading-ll text-white">
          {firstName ? firstName.charAt(0) : ""}
          {lastName ? lastName.charAt(0) : ""}
        </strong>
        <div className="capitalize">
          <h4 className="mb-2 text-base font-semibold leading-sl text-black-300">
            {firstName + " " + lastName}
          </h4>
          <p className="text-sm font-medium leading-ll text-black-300">
            {email || ""}
          </p>
        </div>
      </div>
    );
  }, [firstName, lastName, email]);

  return (
    <div className="relative" ref={menuBtnRef}>
      <button
        className="flex items-center gap-2 rounded-[100px] bg-[#EFF1F6] p-1"
        onClick={toggleDropdown}
      >
        <strong className="flex h-8 w-8 items-center justify-center rounded-full bg-c-gradient text-sm uppercase leading-ll text-white">
          {firstName.charAt(0) + lastName.charAt(0)}
        </strong>

        <Image src={menuIcon} alt="Menu icon" />
      </button>
      <Dropdown
        type="menu"
        width={"300px"}
        show={showMenu}
        overlayTop={overlayTop}
        options={menuOptions}
        header={menuHeader}
        onSelect={selectHandler}
        displayOptions={onMenuDisplay}
        highlightOption={highlightOption}
        highlightedIndex={highlightedIndex}
      />
    </div>
  );
};

export default MenuButton;
