import React, { useCallback, useEffect, useState } from "react";

/**
 * ? Local Imports
 */
import "@styles/index.css";
import { ImageComponent, Images } from "@portfolio-components/images";
import { MobileMenu } from "@portfolio-components/mobile-menu";
import { ToggleButtonTheme } from "@utils";

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

  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  return (
    <div
      className="flex flex-1 visible flex-col transition-all overflow-hidden relative bg-cover bg-no-repeat select-none"
      style={{
        height: "var(--app-height)",
      }}
    >
      <ImageComponent type={Images.bg} />
      <div className="px-2 py-1 relative z-20">
        <ToggleButtonTheme />
      </div>
      <MobileMenu openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
