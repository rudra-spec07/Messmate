import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

function Navbar({ onMenuClick }) {
  const navigate = useNavigate();
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header
      className="
      bg-white
      dark:bg-slate-900
      border-b
      border-slate-200
      dark:border-slate-800
      px-6
      py-4
      flex
      justify-between
      items-center
      sticky
      top-0
      z-40
    "
    >
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="md:hidden p-2 rounded text-slate-700 dark:text-slate-200"
        >
          ☰
        </button>

        <h2
          className="
          text-xl
          font-bold
          text-slate-800
          dark:text-white
        "
        >
          MessMate
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />

        <button
          onClick={handleLogout}
          className="px-3 py-2 rounded bg-slate-800 text-white text-sm hover:bg-slate-700"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Navbar;