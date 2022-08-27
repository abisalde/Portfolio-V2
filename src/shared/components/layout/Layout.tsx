import React, { useCallback, useEffect } from "react";

/**
 * ? Local Imports
 */
import "@styles/index.css";
import { ImageComponent, Images } from "@portfolio-components/images";
import { ToggleButtonTheme } from "@utils";
import { Button } from "flowbite-react";

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
      <div className="absolute z-10 h-full w-full sm:hidden flex flex-col backdrop-blur-lg bg-white/30 backdrop-saturate-200 justify-end">
        <div className="rounded-full w-12 h-12 bg-red-600 text-center">
          <Button>UI</Button>
        </div>
        <div className="rounded-full w-12 h-12 bg-indigo-600 text-center">
          <Button>UOI</Button>
        </div>
      </div>

      <main>{children}</main>
    </div>
  );
};

export default Layout;
