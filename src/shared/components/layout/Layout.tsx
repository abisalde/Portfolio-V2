import React, { useCallback, useEffect } from "react";

/**
 * ? Local Imports
 */
import "@styles/index.css";
import { ToggleButtonTheme } from "@utils";
import { BackgroundImage } from "@portfolio-components/background-image";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const HEIGHT = window.innerHeight;
  const DOC = document.documentElement;

  useEffect(() => {
    heightUpdate();
    window.addEventListener("resize", heightUpdate);
    return () => {
      window.removeEventListener("resize", heightUpdate);
    };
  }, []);

  const heightUpdate = useCallback(() => {
    DOC.style.setProperty("--app-height", `${HEIGHT}px`);
  }, [HEIGHT]);

  return (
    <div
      className="flex flex-col transition-all overflow-hidden relative"
      style={{
        height: "var(--app-height)",
      }}
    >
      <BackgroundImage />
      <div className="px-2 m-0 relative">
        <ToggleButtonTheme />
      </div>
      <div className="container mx-auto">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
