import React from "react";

import {
  Moon,
  Sun,
} from "lucide-react";

const ThemeToggle = ({ darkMode, setDarkMode }) => {

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex items-center justify-center gap-2 rounded-2xl border border-zinc-300 dark:border-zinc-700 px-5 py-3 text-zinc-700 dark:text-zinc-200"
    >

      {darkMode ? (
        <>
          <Sun className="h-5 w-5" />
          Light Mode
        </>
      ) : (
        <>
          <Moon className="h-5 w-5" />
          Dark Mode
        </>
      )}

    </button>
  );
};

export default ThemeToggle;