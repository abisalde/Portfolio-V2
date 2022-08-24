import * as React from "react";
import type { HeadFC } from "gatsby";
import { motion } from "framer-motion";
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link";

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
                className="grid justify-center w-full h-5/6 grid-cols-1 gap-100%"
                key="app-home"
                initial={!location.action ? false : entry.state}
                animate={transitionStatus === "exiting" ? exit.state : { opacity: 1, x: 0, y: 0 }}
                transition={transitionStatus === "exiting" ? { duration: exit.length } : { duration: 0.4 }}
              >
                <div className="">
                  <h1>23</h1>
                </div>
                <div className="">
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
