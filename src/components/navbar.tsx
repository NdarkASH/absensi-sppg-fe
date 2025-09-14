import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";

import { useAuth } from "./AuthUser";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { LogOutIcon } from "@/components/icons";
import { useLogout } from "@/types/logout";

export const Navbar = () => {
  const { logout, loading } = useLogout();
  const { isAuthenticated } = useAuth();

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      {/* Brand */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link className="flex items-center gap-1" color="foreground" href="/">
            <img
              alt="Badan Gizi Nasional"
              className="h-9 w-9 m-1"
              src="https://www.bgn.go.id/logo-bgn.png"
            />
            <p className="font-bold text-inherit">{siteConfig.name}</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop right content */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>

        <NavbarItem className="hidden md:flex">
          {isAuthenticated && (
            <Button
              className="text-sm font-normal text-default-600 bg-default-100"
              isDisabled={loading}
              isLoading={loading}
              startContent={<LogOutIcon className="text-danger" />}
              variant="flat"
              onPress={logout}
            >
              Logout
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>

      {/* Mobile toggle */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarMenu className="bg-default-100 p-4">
        <div className="flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={item.href ?? item.label}>
              <Link
                color={
                  item.label.toLowerCase() === "logout"
                    ? "danger"
                    : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
