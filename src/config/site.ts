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
  sideBarMenuGroups: [
    {
      group: "Main",
      role: "USER",
      items: [
        {
          icon: "lucide:circle-check-big",
          label: "Attendance",
          path: "/attendance",
        },
        { icon: "lucide:user-pen", label: "Biodata", path: "/me" },
      ],
    },
    {
      group: "Admin",
      role: "ADMIN",
      items: [
        {
          icon: "lucide:folder",
          label: "Dashboard",
          path: "/dashboard",
        },
      ],
    },
  ],
  links: {
    github: "https://github.com/frontio-ai/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
