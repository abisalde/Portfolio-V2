import React, { useCallback, useEffect } from "react";

/**
 * ? Local Imports
 */
import "@styles/index.css";
import { ToggleButtonTheme } from "@utils";
import { ImageComponent, Images } from "@portfolio-components/images";

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
      className="flex flex-1 visible flex-col transition-all overflow-hidden relative bg-cover bg-no-repeat select-none"
      style={{
        height: "var(--app-height)",
      }}
    >
      <ImageComponent type={Images.bg} />
      <div className="px-2 py-1 m-auto relative">
        <ToggleButtonTheme />
      </div>
      <div className="absolute z-5 left-0 flex sm:hidden xs:flex bg-red-700 h-full justify-start items-center">
        Live
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
