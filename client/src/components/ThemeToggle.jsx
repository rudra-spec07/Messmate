import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } =
    useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="
      px-3
      py-2
      rounded-lg
      bg-orange-500
      text-white
    "
    >
      {theme === "light"
        ? "☀️"
        : "🌙"}
    </button>
  );
}

export default ThemeToggle;