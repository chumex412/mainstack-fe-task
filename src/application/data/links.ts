import {
  groupIcon,
  homeIcon,
  inserChartIcon,
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
