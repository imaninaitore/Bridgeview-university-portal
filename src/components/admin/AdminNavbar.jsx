import { Bell, Search, Menu } from "lucide-react";

const AdminNavbar = ({ title = "Dashboard" }) => {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between h-20 px-8 bg-white border-b border-slate-200">

      {/* Left */}
      <div className="flex items-center gap-5">

        {/* Mobile Menu (will work later) */}
        <button className="lg:hidden text-slate-700">
          <Menu size={24} />
        </button>

        <div>
          <h1 className="text-3xl font-bold text-[#0A2342]">
            {title}
          </h1>

          <p className="text-sm text-slate-500">
            Welcome back, Administrator
          </p>
        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        {/* Search */}
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-xl">

          <Search
            size={18}
            className="text-slate-500"
          />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm"
          />

        </div>

        {/* Notification */}
        <button className="relative p-2 rounded-full hover:bg-slate-100 transition">

          <Bell
            size={22}
            className="text-[#0A2342]"
          />

          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>

        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">

          <div className="text-right hidden md:block">

            <h3 className="font-semibold text-[#0A2342]">
              Administrator
            </h3>

            <p className="text-sm text-slate-500">
              admin@university.ac.ke
            </p>

          </div>

          <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-[#0A2342] flex items-center justify-center font-bold text-lg shadow">

            A

          </div>

        </div>

      </div>

    </header>
  );
};

export default AdminNavbar;