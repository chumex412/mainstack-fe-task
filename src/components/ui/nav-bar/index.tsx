import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import {
  chatsIcon,
  logo,
  notificationIcon
} from "../../../../public/assets/icons";
import NavLinks from "./NavLInks";
import { navLinks } from "@/application/data/links";
import "./navbar.css";

import { getData } from "@/application/services/request";
import { UserData } from "@/application/domain/entities/general";
import MenuButton from "./MenuButton";

const NavBar = () => {
  const { data } = useQuery<UserData | undefined>({
    queryKey: ["user"],
    queryFn: () => getData("user")
  });

  const firstName = data?.first_name || "";
  const lastName = data?.last_name || "";

  return (
    <nav className="nav-bar sticky top-0 z-50 bg-white py-4">
      <section className="nav-container container items-center justify-between p-3">
        <div className="nav-brand">
          <Image src={logo} alt="Mainstack logo" />
        </div>

        <NavLinks links={navLinks} />

        <div className="nav-right flex items-center justify-end gap-2 lg:justify-start">
          <div className="flex items-center gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-full">
              <Image src={notificationIcon} alt="Notification icon" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full">
              <Image src={chatsIcon} alt="Chats icons" />
            </button>
          </div>
          <MenuButton
            firstName={firstName}
            lastName={lastName}
            email={data?.email || ""}
          />
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
