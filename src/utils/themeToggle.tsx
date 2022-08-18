import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { Tooltip } from "flowbite-react";

const ToggleButtonTheme: React.FC = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <Tooltip content="Toggle Theme" trigger="hover">
          <button
            aria-keyshortcuts="D"
            aria-label="Toggle Theme"
            onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </Tooltip>
      )}
    </ThemeToggler>
  );
};

export default ToggleButtonTheme;

// {theme === "dark" ? "🌙" : "☀️"}
