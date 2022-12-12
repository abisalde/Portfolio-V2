import React, { useCallback, useEffect, useState } from "react";

/**
 * ? Local Imports
 */
import "@styles/index.css";
import { ImageComponent, Images } from "@portfolio-components/images";
import { MobileMenu } from "@portfolio-components/mobile-menu";
import { ToggleButtonTheme } from "@utils";
import SocialLinks from "@portfolio-components/header/SocialLinks";

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
    <div className="main-app flex visible flex-col transition-all bg-cover bg-no-repeat select-none h-full">
      <ImageComponent type={Images.bg} />
      <div className="p-2 relative z-10 flex justify-between items-center">
        <ToggleButtonTheme />
        <SocialLinks />
      </div>
      <main className="relative">{children}</main>
      <MobileMenu openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />
    </div>
  );
};

export default Layout;
