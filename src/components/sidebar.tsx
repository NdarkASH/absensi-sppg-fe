import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Button, Tooltip } from "@heroui/react";
import { useNavigate, useLocation } from "react-router-dom";

import { Role, userResponse, getUser } from "../types/user";

interface NavItemProps {
  icon: string;
  label: string;
  path: string;
  isActive?: boolean;
  isCollapsed?: boolean;
  onClick?: () => void;
}

const NavItem = ({
  icon,
  label,
  isActive = false,
  isCollapsed = false,
  onClick,
}: NavItemProps) => (
  <Button
    disableRipple
    as="a"
    className={`justify-start w-full mb-1 ${
      isActive
        ? "bg-primary-100 text-primary-500 font-medium"
        : "bg-transparent hover:bg-default-100"
    }`}
    color="default"
    startContent={<Icon height={20} icon={icon} width={20} />}
    variant="flat"
    onPress={onClick}
  >
    {!isCollapsed && label}
  </Button>
);

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isUser, setIsUser] = useState<userResponse | null>(null);
  const [error, setError] = useState<String | null>(null);
  const [loading, setLoading] = useState(true);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const handleNavigation = (path: string) => navigate(path);

  const AllMenuItems = [
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
    { icon: "lucide:user-pen", 
      label: "biodata", 
      path: "/me" },
  ];

  useEffect(() => {
    async function fetchUser() {
      try {
        const data = await getUser();

        setIsUser(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load user data.");
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);
  const menuItems = AllMenuItems.filter(
    (item) => !item.role || item.role === isUser?.role,
  );

  const initials = isUser?.username?.charAt(0).toUpperCase();

  return (
    <div
      className={`h-screen border-r border-divider bg-content1 flex flex-col transition-all duration-300 relative overflow-x-hidden ${
        isCollapsed ? "w-20" : "w-60"
      }`}
    >
      {/* Sidebar Header */}
      <button
        className={`absolute top-1/2 right-2 transform -translate-y-1/2 bg-primary-500 text-white rounded-full p-1 shadow z-50     ${isCollapsed ? "top-1/2 right-5" : "top-1/2 right-2 -translate-y-1/2"}`}
        title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        onClick={toggleSidebar}
      >
        <Icon
          height={20}
          icon={isCollapsed ? "lucide:arrow-right" : "lucide:arrow-left"}
          width={20}
        />
      </button>
      <div className="h-16 flex items-center px-4 border-b border-divider relative">
        <div className="flex items-center gap-2 px-2">
          <Icon
            className="text-primary"
            height={30}
            icon="lucide:layers"
            width={30}
          />
          {!isCollapsed && (
            <span className="font-semibold text-lg">HeroUI App</span>
          )}
        </div>

        {/* Toggle Button */}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-hidden">
        {menuItems.map((item) => (
          <NavItem
            key={item.path}
            icon={item.icon}
            isActive={location.pathname === item.path}
            isCollapsed={isCollapsed}
            label={item.label}
            path={item.path}
            onClick={() => handleNavigation(item.path)}
          />
        ))}
      </nav>

      {/* User Profile */}
      <Button
        disableRipple
        className={`w-full transition-all duration-300 flex items-center justify-between ${
          isCollapsed ? "px-6" : "px-4"
        }`}
        color="default"
        endContent={
          !isCollapsed && (
            <Icon
              className="text-default-400"
              height={24}
              icon="lucide:chevron-down"
              width={24}
            />
          )
        }
        startContent={
          <Tooltip content={isUser?.username} placement="right">
            <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-500">
              <span className="text-sm font-medium">{initials}</span>
            </div>
          </Tooltip>
        }
        variant="flat"
      >
        {!isCollapsed && (
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium">{isUser?.username}</span>
            <Tooltip content={isUser?.email}>
              <span className="text-xs text-default-500 truncate block max-w-[96px]">
                {isUser?.email}
              </span>
            </Tooltip>
          </div>
        )}
      </Button>
    </div>
  );
};
