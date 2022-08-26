import React from "react";
import { motion } from "framer-motion";
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link";

/**
 * ? Local Imports
 */
import SocialLinks from "./SocialLinks";

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
            <header className="grid grid-flow-row w-full">
              <motion.div>
                <div>12345</div>
              </motion.div>
              <SocialLinks transitionStatus={transitionStatus} />
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
