import { Role } from "@/types/user";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Absensi dapur SPPG",
  description: "website ini merupakan absen untuk pegawai dapur sppg",
  navItems: [],
  navMenuItems: [
    {
      label: "Biodata",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
      Role: Role.ADMIN,
    },
    {
      label: "attendance",
      href: "/attendance",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  sideBarMenuItems: [
    {
      icon: "lucide:folder",
      label: "Dashboard",
      path: "/dashboard",
      role: Role.ADMIN,
    },
    {
      icon: "lucide:circle-check-big",
      label: "Attendance",
      path: "/attendance",
    },
    { icon: "lucide:user-pen", label: "biodata", path: "/me" },
  ],
  links: {
    github: "https://github.com/frontio-ai/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
