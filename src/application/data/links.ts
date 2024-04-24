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
    icon: homeIcon
  },
  {
    path: "/analytics",
    name: "analytics",
    icon: inserChartIcon
  },
  {
    path: "/revenue",
    name: "revenue",
    icon: ""
  },
  {
    path: "/crm",
    name: "CRM",
    icon: groupIcon
  },
  {
    path: "/apps",
    name: "apps",
    icon: widgetIcon
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
