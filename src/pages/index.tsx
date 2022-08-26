import * as React from "react";
import type { HeadFC } from "gatsby";
import { motion } from "framer-motion";
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link";
import Typewriter from "typewriter-effect";

/**
 * ? Local Imports
 */
import { Header, LinkType } from "@portfolio-components/header";
import { ImageComponent, Images } from "@portfolio-components/images";
import { SEO } from "@portfolio-components/seo";

const IndexPage: React.FC = (props) => {
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
                  <div className="row-start-1 row-end-3 col-start-2 col-span-10 flex flex-col justify-center xs:items-center sm:items-start">
                    <h1 className="sm:text-5xl xs:text-3xl dark:text-primary-main font-display">Isaiah Abiodun</h1>
                    <Typewriter
                      options={{
                        strings: ["Full-Stack Web Developer.", "React-Native Mobile Developer.", "Software Engineer."],
                        autoStart: true,
                        loop: true,
                        wrapperClassName:
                          "text-center sm:text-2xl xs:text-xl text-tertiary font-sans dark:text-secondary antialiased font-semi-bold italic whitespace-nowrap",
                        cursorClassName: "cursor-progress",
                        delay: 40,
                      }}
                    />
                  </div>
                  <nav className="xs:hidden sm:flex row-start-3 row-end-7 col-start-2 col-span-11">
                    <ul className="grid grid-cols-8 grid-rows-6 h-full w-full gap-3">
                      <motion.li
                        className="bg-white rounded-2xl row-start-1 row-end-2 col-span-4 flex flex-col justify-center items-center shadow-lg hover:bg-rose-200 dark:shadow-md dark:shadow-white cursor-pointer drop-shadow-lg"
                        initial={{ x: -600 }}
                        animate={transitionStatus === "exiting" ? { x: -450 } : { x: 0 }}
                        transition={{ duration: 2 }}
                        whileHover={{
                          skew: 0,
                          rotate: 5,
                          x: 15,
                          scale: 1,
                        }}
                      >
                        <TransitionLink
                          id="about-me-link"
                          to="about"
                          className="w-full h-full flex items-center justify-center"
                          exit={{
                            length: 0.6,
                            state: { x: window.innerWidth, opacity: 0 },
                          }}
                          entry={{
                            delay: 0.4,
                            state: { x: -window.innerWidth },
                            appearAfter: 1.5,
                          }}
                        >
                          <h4 className="font-sans2 text-main-text font-semibold whitespace-nowrap text-2xl dark:text-background">
                            About Me
                          </h4>
                        </TransitionLink>
                      </motion.li>
                      <motion.li
                        className="bg-primary-400 rounded-2xl row-start-2 row-end-3 col-span-6 flex flex-col justify-center items-center shadow-md cursor-pointer drop-shadow-lg hover:bg-primary-100 dark:shadow-md dark:shadow-white"
                        initial={{ y: -700 }}
                        animate={transitionStatus === "exiting" ? { y: -450 } : { y: 0 }}
                        transition={{
                          type: "spring",
                          damping: 10,
                          mass: 1,
                          stiffness: 80,
                        }}
                        whileHover={{
                          skew: 0,
                          rotate: -1,
                          y: 10,
                        }}
                      >
                        <TransitionLink
                          id="skills-link"
                          to="skills"
                          className="w-full h-full flex items-center justify-center"
                          exit={{
                            length: 1,
                            state: { x: -window.innerWidth, opacity: 0 },
                          }}
                          entry={{
                            delay: 0.7,
                            state: { x: window.innerWidth },
                            appearAfter: 1,
                          }}
                        >
                          <h4 className="font-sans2 text-main-text font-semibold whitespace-nowrap text-2xl dark:text-background">
                            Skills
                          </h4>
                        </TransitionLink>
                      </motion.li>
                      <motion.li
                        className="bg-white rounded-2xl row-start-3 row-end-4 col-span-7 flex flex-col justify-center items-center shadow-md hover:bg-rose-300 dark:shadow-md dark:shadow-white cursor-pointer drop-shadow-lg"
                        initial={{ x: 600 }}
                        animate={transitionStatus === "exiting" ? { x: 300 } : { x: 0 }}
                        transition={{ duration: 2.5 }}
                        whileHover={{
                          skew: 0,
                          rotate: -1,
                          x: -20,
                        }}
                      >
                        <TransitionLink
                          id="projects-link"
                          to="projects"
                          className="w-full h-full flex items-center justify-center"
                          exit={{
                            length: 0.6,
                            state: { y: -window.innerHeight, opacity: 0 },
                          }}
                          entry={{
                            delay: 0.4,
                            state: { y: window.innerHeight },
                            appearAfter: 1,
                          }}
                        >
                          <h4 className="font-sans2 text-main-text font-semibold whitespace-nowrap text-2xl dark:text-background">
                            Projects
                          </h4>
                        </TransitionLink>
                      </motion.li>
                      <motion.li
                        className="bg-primary-400 rounded-2xl row-start-4 row-end-5 col-span-5 flex flex-col justify-center items-center shadow-md cursor-pointer drop-shadow-lg hover:bg-primary-100 dark:shadow-md dark:shadow-white"
                        initial={{ y: 500 }}
                        animate={transitionStatus === "exiting" ? { y: 370 } : { y: 0 }}
                        transition={{ duration: 2.8 }}
                        whileHover={{
                          skew: 0,
                          rotate: -5,
                          y: -20,
                        }}
                      >
                        <TransitionLink
                          id="contact-link"
                          to="contact"
                          className="w-full h-full flex items-center justify-center"
                          exit={{
                            length: 0.6,
                            state: { y: window.innerHeight, opacity: 0 },
                          }}
                          entry={{
                            delay: 0.4,
                            state: { y: -window.innerHeight },
                            appearAfter: 1.5,
                          }}
                        >
                          <h4 className="font-sans2 text-main-text font-semibold whitespace-nowrap text-2xl dark:text-background">
                            Contact
                          </h4>
                        </TransitionLink>
                      </motion.li>
                    </ul>
                  </nav>
                  <div className="xs:block sm:hidden flex-col justify-center items-center row-start-3 row-end-7 col-start-2 col-span-12">
                    <motion.div
                      className="shadow-lg border-2 border-slate-400 w-full h-4/6 flex justify-center items-center dark:shadow-md dark:shadow-white"
                      style={{
                        borderRadius: "75% 25% 32% 68% / 53% 47% 53% 57%",
                      }}
                      initial={{ y: 10 }}
                      animate={transitionStatus === "exiting" ? { y: -10 } : { y: 0 }}
                      transition={{
                        y: { duration: 1, yoyo: Infinity, ease: "easeOut" },
                      }}
                    >
                      <ImageComponent type={Images.home} />
                    </motion.div>
                  </div>
                </div>
                <div className="xs:hidden sm:flex flex-col justify-center items-center">
                  <motion.div
                    className="shadow-md border-2 border-slate-400 w-full h-5/6 flex justify-center items-center dark:shadow-md dark:shadow-white"
                    style={{
                      borderRadius: "75% 25% 32% 68% / 53% 47% 53% 57%",
                    }}
                    initial={{ y: 10 }}
                    animate={transitionStatus === "exiting" ? { y: -10 } : { y: 0 }}
                    transition={{
                      y: { duration: 1, yoyo: Infinity, ease: "easeOut" },
                    }}
                  >
                    <ImageComponent type={Images.home} />
                  </motion.div>
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
