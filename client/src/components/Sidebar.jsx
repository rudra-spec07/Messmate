import { NavLink } from "react-router-dom";

function Sidebar({ isMobileMenuOpen, closeMobileMenu }) {
  const user = JSON.parse(localStorage.getItem("user"));

  const linkClass = ({ isActive }) =>
    `p-3 rounded-xl transition-all ${
      isActive
        ? "bg-orange-500 text-white"
        : "dark:text-white hover:bg-orange-100 dark:hover:bg-slate-800"
    }`;

  return (
    <>
      {/* Mobile Dark Backdrop Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      <aside
        className={`
        ${isMobileMenuOpen ? "fixed inset-y-0 left-0 z-50 flex shadow-2xl" : "hidden"}
        flex-col
        w-64
        h-screen
        bg-white
        dark:bg-slate-900
        border-r
        border-slate-200
        dark:border-slate-800
        md:static
        md:flex
        md:h-auto
      `}
      >
        <div className="p-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-orange-500">MessMate</h1>

          <button
            type="button"
            onClick={closeMobileMenu}
            className="text-xl text-slate-600 dark:text-slate-200 md:hidden"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col gap-2 px-4" onClick={closeMobileMenu}>
          {/* STUDENT MENU */}
          {user?.role === "student" && (
            <>
              <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
              <NavLink to="/menu" className={linkClass}>Menu</NavLink>
              <NavLink to="/attendance" className={linkClass}>Attendance</NavLink>
              <NavLink to="/complaints" className={linkClass}>Complaints</NavLink>
              <NavLink to="/announcements" className={linkClass}>Announcements</NavLink>
            </>
          )}

          {/* MANAGER MENU */}
          {user?.role === "manager" && (
            <>
              <NavLink to="/manager/dashboard" className={linkClass}>Dashboard</NavLink>
              <NavLink to="/manager/complaints" className={linkClass}>Manage Complaints</NavLink>
              <NavLink to="/manager/announcements" className={linkClass}>Create Announcement</NavLink>
              <NavLink to="/manager/menu" className={linkClass}>Manage Menu</NavLink>
              <NavLink to="/manager/attendance" className={linkClass}>Attendance Report</NavLink>
            </>
          )}
        </nav>

        {/* BOTTOM USER PROFILE ACCENT */}
        <div className="mt-auto p-6 flex items-center gap-3">
          <div
            className="
            w-10
            h-10
            rounded-full
            bg-orange-500
            text-white
            flex
            items-center
            justify-center
            font-semibold
          "
          >
            {user?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>
          
          {/* Displays user role instead of name */}
          {user?.role && (
            <span className="text-sm font-semibold capitalize text-slate-600 dark:text-slate-300">
              {user.role}
            </span>
          )}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;