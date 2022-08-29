import React from "react";
import { motion } from "framer-motion";
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link";

/**
 * ? Local Imports
 */
import SocialLinks from "./SocialLinks";
import { NavLinks } from "@utils";

export enum LinkType {
  Home = "index",
  About = "about",
  Projects = "projects",
  Skills = "skills",
  Contact = "contact",
}

interface HeaderProps {
  view: typeof LinkType[keyof typeof LinkType];
}

const Header: React.FC<HeaderProps> = ({ view }) => {
  return (
    <TransitionState>
      {({ transitionStatus }: any) => {
        if (view !== LinkType.Home) {
          return (
            <header className="grid grid-cols-12 grid-rows-1 px-2 w-full h-auto place-items-stretch items-center">
              <motion.div
                className="col-start-2 col-span-7 row-start-1 xs:hidden sm:flex"
                initial={{ x: -700 }}
                animate={transitionStatus === "exiting" ? { x: -400 } : { x: 0 }}
                transition={{
                  duration: 2,
                }}
              >
                {typeof window !== "undefined" &&
                  NavLinks.map((links) => (
                    <TransitionLink
                      key={links.id}
                      to={links.urlPath}
                      id={links.id}
                      className="px-5 font-sans2 font-main-text font-semibold text-xl w-min-content relative transition-all before:absolute before:bottom-0 before:right-0 before:h-1 before:w-0 before:bg-blue-400 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full hover:before:bg-red-500"
                      entry={links.entry}
                      exit={{
                        length: 0.4,
                        y: window.innerHeight,
                      }}
                    >
                      {links.name}
                    </TransitionLink>
                  ))}
              </motion.div>
              <div className="col-start-10 col-span-12 row-start-1">
                <SocialLinks transitionStatus={transitionStatus} />
              </div>
            </header>
          );
        } else {
          return (
            <header className="grid grid-flow-col w-full pr-4">
              <SocialLinks transitionStatus={transitionStatus} />
            </header>
          );
        }
      }}
    </TransitionState>
  );
};

export default Header;
