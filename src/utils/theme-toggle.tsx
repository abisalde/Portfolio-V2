import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { Tooltip, Button } from "flowbite-react";
import { FiSun } from "@react-icons/all-files/fi/FiSun";
import { BsMoon } from "@react-icons/all-files/bs/BsMoon";

const ToggleButtonTheme: React.FC = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <Tooltip content="Toggle Theme" aria-label="Toggle Theme">
          <Button
            aria-keyshortcuts="D"
            size="sm"
            outline={false}
            color={"transparent"}
            aria-label="Toggle Theme"
            onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <BsMoon fontSize={20} /> : <FiSun fontSize={20} />}
          </Button>
        </Tooltip>
      )}
    </ThemeToggler>
  );
};

export default ToggleButtonTheme;
