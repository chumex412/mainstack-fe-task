"use client";

import { NavLinksProps } from "@/application/domain/entities/ui";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ links = [] }: NavLinksProps) => {
  const currentPath = usePathname();
  return (
    <ul className="flex items-center gap-5">
      {links.map((link) => (
        <li
          key={link.name}
          className={`${currentPath === link.path ? "active" : ""} p-2`}
        >
          <Link className="flex items-center gap-1" href={link.path}>
            <Image src={link.icon} alt={link.name} />
            <span className="leading-ll text-black-300 text-base capitalize">
              {link.name}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
