import React from "react";
import { HeadFC } from "gatsby";
import { motion } from "framer-motion";

/**
 * ? Local Imports
 */
import { Header, LinkType } from "@portfolio-components/header";
import { ImageComponent, Images } from "@portfolio-components/images";
import { SEO } from "@portfolio-components/seo";

const About: React.FC = ({ transitionStatus, entry }: any) => {
  return (
    <>
      <Header view={LinkType.About} />
      {typeof window !== "undefined" && (
        <motion.div
          className="flex sm:flex-row xs:flex-col flex-nowrap justify-between w-full h-full mx-auto sm:px-10 xs:px-4 py-2"
          initial={entry.state}
          animate={transitionStatus === "exiting" ? { x: -window.innerWidth } : { x: 0 }}
          transition={{
            duration: 2.5,
          }}
        >
          <div className="sm:w-[45%] xs:w-full">
            <h2 className="font-display text-slate-700 dark:text-secondary font-bold xs:text-3xl sm:text-5xl">
              about me
            </h2>
            <motion.p
              className="text-slate-500 font-sans xs:text-base sm:text-2xl xs:text-justify sm:text-right dark:text-amber-600"
              initial={{ y: -700 }}
              animate={transitionStatus === "entered" ? { y: 0 } : { y: 700 }}
              transition={{
                duration: 2,
              }}
            >
              I am a Software Engineer with hands on experience developing Mobile, Websites, and Full-Stack Web
              applications 🚀️.
            </motion.p>
            <div className="py-3">
              <span className="font-sans font-semibold">Who am I & What I do:</span>
              <ul className="list-disc xs:overflow-y-auto sm:overflow-hidden xs:h-4/6 h-fit">
                {_DATA?.map(({ id, description }: AboutDataType) => (
                  <li
                    key={id}
                    className="font-sans font-thin sm:text-base xs:text-tiny inline-block leading-6 text-justify"
                  >
                    🌏️ {"   "} {description}.
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="sm:w-[45%] xs:hidden sm:block">
            <motion.div
              className="shadow-md border-2 border-slate-400 w-full h-5/6 flex justify-center items-center dark:shadow-md dark:shadow-white"
              style={{
                borderRadius: "75% 25% 32% 68% / 53% 47% 53% 57%",
              }}
              initial={{ y: 10 }}
              animate={transitionStatus === "exiting" ? { y: -10 } : { y: 0 }}
              transition={{
                y: { duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeIn" },
              }}
            >
              <ImageComponent type={Images.home} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default About;

export const Head: HeadFC = () => <SEO pathname={`/${LinkType.About}`} title="About Me" />;

type AboutDataType = {
  id: string;
  description: string;
};

const _DATA: AboutDataType[] = [
  {
    id: "about-me-001",
    description:
      "I enjoy solving complex UI problems and building with beautiful interface designs while also writing readable and scalable code",
  },
  {
    id: "about-me-002",
    description:
      "I am a graduate of engineering with good understanding about concepts, functional programming, data structures, Algorithms, and web metrics",
  },
  {
    id: "about-me-003",
    description:
      "I love what I do working and creating magic with pixel perfect UI Frontend environments. Also, I love being able to work with a team and group of clients as a freelancer discussing their challenges, sharing my knowledge and helping them reach their desired goals",
  },
  {
    id: "about-me-004",
    description:
      "When I am not coding or making magic with pixels, I am either cooking or catching fun on the snooker board",
  },
];
