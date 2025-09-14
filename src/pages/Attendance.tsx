import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

function Attendance() {
  return (
    <div className="flex h-screen bg-content1">
      {/* Sidebar kiri */}
      <Sidebar />

      {/* Konten kanan */}
      <div className="flex flex-col flex-1">
        {/* Navbar atas */}
        <Navbar />

        {/* Konten halaman */}
        <div className="p-4">attendance</div>
      </div>
    </div>
  );
}

export default Attendance;
