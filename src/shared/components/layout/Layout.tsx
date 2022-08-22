import React from "react";

/**
 * ? Local Imports
 */
import { ToggleButtonTheme } from "@utils";
import { useWindowSize } from "@hooks";
import { Header, LinkType } from "@portfolio-components/header";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const windowSize = useWindowSize();

  return (
    <div
      className="flex flex-col bg-no-repeat bg-cover overflow-hidden transition-all duration-300 h-screen w-screen"
      style={{
        height: "var(--app-height)",
        width: windowSize.width,
      }}
    >
      <Header view={LinkType.Home} />
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
