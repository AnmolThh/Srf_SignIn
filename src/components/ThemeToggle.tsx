import { useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const ThemeTog = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  };
  return (
    <>
      <button onClick={ThemeTog} className="absolute top-9 left-5">
        {isDarkMode ? (
          <Sun className="text-white" />
        ) : (
          <Moon className="text-gray-800" />
        )}
      </button>
    </>
  );
};

export default ThemeToggle;
