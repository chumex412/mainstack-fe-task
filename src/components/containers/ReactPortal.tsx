"use client";

import { ReactElement, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ReactPortalProps } from "@/application/domain/entities/general";

const createWrapperAndAppendToBody = (wrapperId: string) => {
  const element = document.createElement("div");
  element.setAttribute("id", wrapperId);

  document.body.appendChild(element);

  return element;
};

export default function ReactPortal({
  children,
  wrapperId = "react-portal-wrapper"
}: ReactPortalProps<ReactElement>) {
  const [wrapperElem, setWrapperElem] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    let systemCreated = false;
    let elem = document.getElementById(wrapperId);

    if (!elem) {
      elem = createWrapperAndAppendToBody(wrapperId);
      systemCreated = true;

      setWrapperElem(elem);
    }

    return () => {
      if (systemCreated && elem?.parentElement) {
        elem.parentElement.removeChild(elem);
      }
    };
  }, [wrapperId]);

  if (!wrapperElem) return null;

  return createPortal(children, wrapperElem);
}
