import {
  GroupIcon,
  HomeIcon,
  InsertIcon,
  PaymentIcon,
  WidgetIcon
} from "@/components/icons";
import {
  chatsIcon,
  groupIcon,
  homeIcon,
  inserChartIcon,
  notificationIcon,
  widgetIcon
} from "../../../public/assets/icons";

export const navLinks = [
  {
    path: "/",
    name: "home",
    Icon: HomeIcon
  },
  {
    path: "/analytics",
    name: "analytics",
    Icon: InsertIcon
  },
  {
    path: "/revenue",
    name: "revenue",
    Icon: PaymentIcon
  },
  {
    path: "/crm",
    name: "CRM",
    Icon: GroupIcon
  },
  {
    path: "/app",
    name: "apps",
    Icon: WidgetIcon
  }
];

export const menuOptions = [
  { value: "Settings", label: "Settings", icon: chatsIcon },
  {
    value: "Purchase History",
    label: "Purchase History",
    icon: inserChartIcon
  },
  { value: "Refer and Earn", label: "Refer and Earn", icon: notificationIcon },
  { value: "Integrations", label: "Integrations", icon: widgetIcon },
  { value: "Refer Bug", label: "Refer Bug", icon: groupIcon },
  { value: "Switch Account", label: "Switch Account", icon: widgetIcon },
  { value: "Sign Out", label: "Sign Out", icon: inserChartIcon }
];
