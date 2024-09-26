import { Boxes, Home, UserCog } from "lucide-react";

export const ROUTES = [
  {
    label: "Dashboard",
    icon: Home,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Service Control",
    icon: Boxes,
    href: "/service",
    color: "text-violet-500",
  },
  {
    label: "Account Settings",
    icon: UserCog,
    href: "/account",
    color: "text-orange-700",
  },
];
