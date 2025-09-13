import { Sidebar } from "@/components/sidebar";
import { ThemeSwitch } from "@/components/theme-switch";

function Biodata() {
  return (
    <div>
      <Sidebar />
      <ThemeSwitch className="absolute top-4 right-4 z-50" />
      <div className="flex h-screen bg-content1">biodata</div>
    </div>
  );
}

export default Biodata;
