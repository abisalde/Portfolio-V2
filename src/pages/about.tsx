import React, { useEffect } from "react";
import { HeadFC } from "gatsby";
import { motion } from "framer-motion";
import { TransitionState } from "gatsby-plugin-transition-link";
/**
 * ? Local Imports
 */
import { Header, LinkType } from "@portfolio-components/header";
import { ImageComponent, Images } from "@portfolio-components/images";
import { SEO } from "@portfolio-components/seo";

// TODO: TEST

import codeAnimation from "@assets/lottiefiles/code-animation.json";

const About: React.FC = (props) => {
  console.log("Transition Status", props);

  return (
    <>
      <Header view={LinkType.About} />
      <TransitionState>
        {({ transitionStatus }) => (
          <div className="flex sm:flex-row xs:flex-col flex-nowrap justify-between w-full h-full mx-auto xs:p-4 sm:px-10 py-6">
            <div className="sm:w-[60%] xs:w-full">
              <h2 className="font-display text-slate-700 dark:text-secondary font-bold xs:text-3xl sm:text-5xl">
                about me
              </h2>
              <p>
                I'm a Software Engineer with hands on experience developing <span>Mobile</span>, <span>Websites</span>,
                and <span>Full-Stack Web</span>applications
              </p>
            </div>
            <div className="sm:w-[40%] xs:hidden sm:block">
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
          </div>
        )}
      </TransitionState>
    </>
  );
};

export default About;

export const Head: HeadFC = () => <SEO pathname={`/${LinkType.About}`} title="About Me" />;

{
  /*<p>
I enjoy creating and building complex UI problems with beautiful interface designs while also writing readable and scalable code.
</p>
*/
}

{
  /*<p>
  I am an engineering graduate with good understanding about concepts, functional programming, data structures, Algorithms, and web metrics.
</p>
*/
}

{
  /*<p>
  I love what I do working and creating magic with pixel perfect UI Frontend environments. Also, I love being able to work with a team and group of clients as a freelancer discussing their challenges, sharing my knowledge and helping them reach their desired goals.
</p>
*/
}

{
  /*<p>
  When I am not coding or making magic with pixels, I am either cooking or catching fun on the snooker board.
</p>
*/
}
