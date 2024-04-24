"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, SVGProps } from "react";
import { IconProps, NavLinksProps } from "@/application/domain/entities/ui";

const NavLinks = ({
  links = []
}: NavLinksProps<FC<SVGProps<SVGSVGElement>>>) => {
  const currentPath = usePathname();
  return (
    <div className="nav-link-container w-full py-2 lg:py-0">
      <ul className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-center">
        {links.map((link) => {
          return (
            <li
              key={link.name}
              className={`${currentPath === link.path ? "active" : ""} p-2`}
            >
              <Link className="flex items-center gap-1" href={link.path}>
                <link.Icon fill="#000" />
                <span
                  className={`text-base capitalize leading-ll ${currentPath === link.path ? "text-white" : "text-black-300"}`}
                >
                  {link.name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavLinks;
