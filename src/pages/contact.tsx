import React from "react";
import { motion } from "framer-motion";

import type { HeadFC } from "gatsby";
// import { TwitterTimelineEmbed } from "react-twitter-embed";

/**
 * ? Local Imports
 */
import { Header, LinkType } from "@portfolio-components/header";
import { SEO } from "@portfolio-components/seo";

const Contact: React.FC = ({ transitionStatus, entry }: any) => {
  return (
    <>
      <Header view={LinkType.Contact} />
      {typeof window !== "undefined" && (
        <motion.div
          className="flex sm:flex-row xs:flex-col flex-nowrap justify-between w-full h-full mx-auto sm:px-10 xs:px-4 py-2"
          initial={entry.state}
          animate={transitionStatus === "exiting" ? { x: -window.innerWidth } : { x: 0 }}
          transition={{
            duration: 2.5,
          }}
        >
          <div className="form-wrapper p-4 md:p-6 lg:p-8 flex">
            <form className="signup-form max-w-sm rounded-2xl backdrop-blur-lg [ p-8 md:p-10 lg:p-10 ] [ bg-gradient-to-b from-white/60 to-white/30 ] [ border-[1px] border-solid border-white border-opacity-30 ] [ shadow-black/70 shadow-2xl ]">
              <input className="" placeholder="Your name" name="name" aria-label="Your name" required type="text" />
              <input
                aria-label="Email address"
                className=""
                placeholder="Email Address"
                name="name"
                required
                type="email"
              />
              <input aria-label="Subject" className="" placeholder="Subject" name="subject" required type="text" />
              <textarea aria-label="Message" className="" placeholder="Let me know...." name="message" required />
            </form>
          </div>
          {/* <TwitterTimelineEmbed
            sourceType="profile"
            screenName={"abisalde"}
            options={{ height: 400, width: window.screen.width }}
            autoHeight={false}
            borderColor="#fff"
            key={"twitter-em"}
            noFooter={true}
          /> */}
        </motion.div>
      )}
    </>
  );
};

export default Contact;

export const Head: HeadFC = () => <SEO pathname={`/${LinkType.Contact}`} title="Contact Me" />;
