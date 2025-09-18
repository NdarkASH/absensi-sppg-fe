import { Outlet } from "react-router-dom";

import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { useAuth } from "@/components/AuthUser";

export default function DefaultLayout() {
  const { isAuthenticated } = useAuth();

  return (
    <div
      className={`flex flex-col overflow-hidden ${
        isAuthenticated ? "h-screen" : "h-min-screen"
      }`}
    >
      {" "}
      {/* Navbar */}
      {isAuthenticated && <Navbar />}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar di kiri */}
        {isAuthenticated && (
          <div className="h-full">
            <Sidebar />
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 container mx-auto max-w-7xl px-6 pt-16 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
