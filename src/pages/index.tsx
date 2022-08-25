import * as React from "react";
import type { HeadFC } from "gatsby";
import { motion } from "framer-motion";
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link";
import Typewriter from "typewriter-effect";

/**
 * ? Local Imports
 */
import { Header, LinkType } from "@portfolio-components/header";
import { SEO } from "@portfolio-components/seo";

const IndexPage: React.FC = (props) => {
  console.log("Location", props);

  const { location }: any = props;
  return (
    <>
      <Header view={LinkType.Home} />
      <TransitionState>
        {({ transitionStatus, entry, exit }) => (
          <>
            {typeof window !== "undefined" && (
              <motion.div
                className="grid sm:grid-cols-2 gap-5 h-full w-11/12 mx-auto px-1 xs:grid-cols-1"
                key="app-home"
                initial={!location.action ? false : entry.state}
                animate={transitionStatus === "exiting" ? exit.state : { opacity: 1, x: 0, y: 0 }}
                transition={transitionStatus === "exiting" ? { duration: exit.length } : { duration: 0.4 }}
              >
                <div className="grid grid-cols-12 grid-rows-6 h-full w-full place-items-stretch">
                  <div className="row-start-1 row-end-3 col-start-2 col-span-10 flex flex-col justify-center">
                    <h1 className="sm:text-5xl xs:text-3xl dark:text-primary-main font-display">Isaiah Abiodun</h1>
                    <Typewriter
                      options={{
                        strings: ["Full-Stack Web Developer.", "React-Native Mobile Developer.", "Software Engineer."],
                        autoStart: true,
                        loop: true,
                        wrapperClassName:
                          "text-center sm:text-2xl xs:text-base text-tertiary font-sans dark:text-secondary antialiased font-semi-bold italic whitespace-nowrap",
                        cursorClassName: "landing-page__cursor",
                        delay: 40,
                      }}
                    />
                  </div>
                  <nav className="row-start-3 row-end-7 col-start-2 col-span-11 bg-fuchsia-600">
                    <ul className="grid grid-cols-8 grid-rows-6 h-full w-full gap-2">
                      <li className="bg-red-400 row-start-1 row-end-2 col-span-4 flex flex-col justify-center items-center">
                        About
                      </li>
                      <li className="bg-fuchsia-300 row-start-2 row-end-3 col-span-6 flex flex-col justify-center items-center">
                        Resume
                      </li>
                      <li className="bg-rose-500 row-start-3 row-end-4 col-span-7 flex flex-col justify-center items-center">
                        Project
                      </li>
                      <li className="bg-secondary row-start-4 row-end-5 col-span-5 flex flex-col justify-center items-center">
                        Contact
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="sm:block xs:hidden">
                  <h2>25</h2>
                </div>
              </motion.div>
            )}
          </>
        )}
      </TransitionState>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO pathname={"/"} />;
