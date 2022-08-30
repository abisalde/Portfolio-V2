import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { Button } from "flowbite-react";
import { FiSun } from "@react-icons/all-files/fi/FiSun";
import { BsMoon } from "@react-icons/all-files/bs/BsMoon";

const ToggleButtonTheme: React.FC = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <Button
          aria-keyshortcuts="D"
          size="sm"
          outline={false}
          color={"transparent"}
          aria-label="Toggle Theme"
          onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <FiSun fontSize={20} /> : <BsMoon fontSize={20} />}
        </Button>
      )}
    </ThemeToggler>
  );
};

export default ToggleButtonTheme;
