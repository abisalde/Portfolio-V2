import React, { useCallback, useEffect } from "react";
import { ToggleButtonTheme } from "@utils";

const HEIGHT = window.innerHeight;
const DOC = document.documentElement;

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const heightUpdate = useCallback(() => {
    DOC.style.setProperty("--app-height", `${HEIGHT}px`);
  }, [HEIGHT]);

  useEffect(() => {
    heightUpdate();
    window.addEventListener("resize", heightUpdate);
    return () => {
      window.removeEventListener("resize", heightUpdate);
    };
  }, []);

  return (
    <div
      className="flex flex-col bg-no-repeat bg-cover overflow-hidden transition-all duration-300"
      style={{
        height: "var(--app-height)",
      }}
    >
      <div className="container mx-auto">
        <header className="grid">
          <div className="flex flex-col py-2">
            <ToggleButtonTheme />
          </div>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
