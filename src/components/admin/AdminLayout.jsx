import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

const AdminLayout = ({ children, title }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <AdminSidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className="w-72 h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <AdminSidebar />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        <AdminNavbar
          title={title}
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main className="flex-1 p-8">

          {children}

        </main>

      </div>

    </div>
  );
};

export default AdminLayout;