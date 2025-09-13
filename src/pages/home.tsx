import { Sidebar } from "@/components/sidebar";
import { ThemeSwitch } from "@/components/theme-switch";
import DefaultLayout from "@/layouts/default";

function home() {
  return (
    <div>
      <Sidebar />
      <ThemeSwitch className="absolute top-4 right-4 z-50" />
      <DefaultLayout>
        <div className="flex h-screen bg-content1">home</div>
      </DefaultLayout>
    </div>
  );
}

export default home;
