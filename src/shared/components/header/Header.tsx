import React from "react";
import { motion } from "framer-motion";
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { Button, Tooltip } from "flowbite-react";

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
        if (view !== "index") {
          return (
            <header>
              <motion.div>
                <div>12345</div>
              </motion.div>
            </header>
          );
        } else {
          return (
            <header className="grid grid-flow-col w-full">
              <div className="flex justify-end">
                <motion.div
                  className="flex flex-row items-center"
                  initial={{ x: 500 }}
                  animate={transitionStatus === "exiting" ? { x: 500 } : { x: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  <a
                    href="https://linkedin.com/in/abisalde"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn Profile"
                    className="px-2 shadow-lg"
                  >
                    <Tooltip content="LinkedIn Profile">
                      <Button gradientDuoTone={"greenToBlue"}>
                        <FaLinkedinIn fontSize={20} />
                      </Button>
                    </Tooltip>
                  </a>

                  <a
                    href="https://github.com/abisalde"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Profile"
                    className="px-2 shadow-lg"
                  >
                    <Tooltip content="GitHub Profile">
                      <Button gradientDuoTone={"greenToBlue"}>
                        <FaGithub fontSize={20} />
                      </Button>
                    </Tooltip>
                  </a>

                  <a
                    href="https://twitter.com/abisalde"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter Profile"
                    className="px-2 shadow-lg"
                  >
                    <Tooltip content="Twitter Profile">
                      <Button gradientDuoTone={"greenToBlue"}>
                        <FaTwitter fontSize={20} />
                      </Button>
                    </Tooltip>
                  </a>
                </motion.div>
              </div>
            </header>
          );
        }
      }}
    </TransitionState>
  );
};

export default Header;
