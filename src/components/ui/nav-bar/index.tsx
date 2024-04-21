import Image from "next/image";
import {
  chatsIcon,
  logo,
  menuIcon,
  notificationIcon
} from "../../../../public/assets/icons";
import NavLinks from "./NavLInks";
import { navLinks } from "@/application/data/links";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="nav-bar py-4">
      <section className="container flex items-center justify-between p-3">
        <div>
          <div>
            <Image src={logo} alt="Mainstack logo" />
          </div>
        </div>
        <div>
          <NavLinks links={navLinks} />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-full">
              <Image src={notificationIcon} alt="Notification icon" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full">
              <Image src={chatsIcon} alt="Chats icons" />
            </button>
          </div>
          <div className="flex items-center gap-2 rounded-[100px] bg-[#EFF1F6] p-1">
            <p className="bg-c-gradient leading-ll flex h-8 w-8 items-center justify-center rounded-full text-sm text-white">
              OJ
            </p>
            <button>
              <Image src={menuIcon} alt="Menu icon" />
            </button>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
