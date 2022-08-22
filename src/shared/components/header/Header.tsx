import React from "react";
import { motion } from "framer-motion";
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link";

export enum LinkType {
  Home = "index",
  About = "about",
  Projects = "projects",
  Resume = "resume",
  Contact = "contact",
}

interface HeaderProps {
  view: typeof LinkType[keyof typeof LinkType];
}

const Header: React.FC<HeaderProps> = ({ view }) => {
  return (
    <TransitionState>
      {({ transitionStatus }: any) => {
        console.log("Transition Status", transitionStatus);
        if (view !== "index") {
          return (
            <motion.div>
              <div>12345</div>
            </motion.div>
          );
        } else {
          return (
            <div className="flex justify-end">
              <motion.div
                className="flex flex-row justify-end"
                initial={{ x: 500 }}
                animate={transitionStatus === "exiting" ? { x: 500 } : { x: 0 }}
                transition={{ duration: 2 }}
              >
                <a href="#" target="_blank" rel="noreferrer" aria-label="Social Links" className="self-end">
                  <h1 className="m-0 text-purple-900 text-4xl font-bold">We Go</h1>
                </a>

                <a href="#" target="_blank" rel="noreferrer" aria-label="Social Links" className="self-end">
                  <h1 className="m-0 text-primary text-4xl font-bold">Loud Go</h1>
                </a>
              </motion.div>
            </div>
          );
        }
      }}
    </TransitionState>
  );
};

export default Header;
