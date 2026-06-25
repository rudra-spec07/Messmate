import { useState } from "react"; // Added useState
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  // 1. Create the state to control if the mobile menu is open
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      className="
      flex
      min-h-screen
      bg-slate-100
      dark:bg-slate-900
      transition-all
      duration-300
    "
    >
      {/* 2. Pass the state and close function to Sidebar */}
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen} 
        closeMobileMenu={() => setIsMobileMenuOpen(false)} 
      />

      <div className="flex-1">
        {/* 3. Pass the open function to Navbar when menu is clicked */}
        <Navbar onMenuClick={() => setIsMobileMenuOpen(true)} />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;