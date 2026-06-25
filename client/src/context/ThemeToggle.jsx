import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } =
    useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="
      px-4
      py-2
      rounded-lg
      bg-orange-500
      text-white
      hover:scale-105
      transition
    "
    >
      {theme === "light"
        ? "🌅 Sunset"
        : "☀️ Light"}
    </button>
  );
}

export default ThemeToggle;