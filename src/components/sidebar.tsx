import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Button, Tooltip } from "@heroui/react";
import { useNavigate, useLocation } from "react-router-dom";

import { useAuth } from "./AuthUser";

import userService from "@/service/userService";
import { siteConfig } from "@/config/site";
import { userResponse } from "@/types/user";

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
  isActive,
  isCollapsed,
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
  const [collapsedGroups, setCollapsedGroups] = useState<
    Record<string, boolean>
  >({});
  const [isUser, setIsUser] = useState<userResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const { token, logout, isAuthenticated } = useAuth();

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const toggleGroup = (group: string) =>
    setCollapsedGroups((prev) => ({ ...prev, [group]: !prev[group] }));

  const handleNavigation = (path: string) => navigate(path);

  useEffect(() => {
    const fetchUser = async () => {
      if (!token || !isAuthenticated) {
        navigate("/login");

        return;
      }
      try {
        const response = await userService.getUser();

        setIsUser(response);
      } catch (error: any) {
        if (error?.status === 401) {
          logout();
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [token, isAuthenticated, logout, navigate]);

  if (loading) return <div>Loading...</div>;

  const initials = isUser?.username?.charAt(0).toUpperCase();

  return (
    <div
      className={`h-full border-r border-divider bg-content1 flex flex-col transition-all duration-300 relative overflow-x-hidden ${
        isCollapsed ? "w-20" : "w-60"
      }`}
    >
      {/* Collapse button */}
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-primary-500 text-white rounded-full p-1 shadow"
        title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        onClick={toggleSidebar}
      >
        <Icon
          height={20}
          icon={isCollapsed ? "lucide:arrow-right" : "lucide:arrow-left"}
          width={20}
        />
      </button>

      {/* Navigation with groups */}
      <nav className="flex-1 p-4 overflow-hidden">
        {siteConfig.sideBarMenuGroups
          .filter(
            (group) =>
              !group.role ||
              isUser?.role === "ADMIN" ||
              group.role === isUser?.role,
          )
          .map((group) => (
            <div key={group.group} className="mb-4">
              {/* Group header */}
              <button
                className={`flex items-center w-full text-xs font-semibold uppercase mb-2 transition-all duration-300
        ${isCollapsed ? "justify-center text-gray-400" : "justify-between text-gray-500"}`}
                onClick={() => toggleGroup(group.group)}
              >
                {/* teks muncul hanya kalau sidebar expand */}
                {!isCollapsed && <span>{group.group}</span>}
                <Icon
                  height={16}
                  icon={
                    collapsedGroups[group.group]
                      ? "lucide:chevron-right"
                      : "lucide:chevron-down"
                  }
                  width={16}
                />
              </button>

              {/* Group items */}
              {!collapsedGroups[group.group] &&
                group.items.map((item) => (
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
            </div>
          ))}
      </nav>

      {/* User Profile */}
      <Button
        disableRipple
        className={`w-full transition-all duration-300 flex items-center justify-start ${
          isCollapsed ? "px-6" : "px-4"
        }`}
        color="default"
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
          <div className="flex flex-col items-start ">
            <span className="text-sm font-medium truncate block max-w-[120px]">
              {isUser?.username}
            </span>
            <Tooltip content={isUser?.email}>
              <span className="text-xs text-default-500 truncate block max-w-[120px]">
                {isUser?.email}
              </span>
            </Tooltip>
          </div>
        )}
      </Button>
    </div>
  );
};
