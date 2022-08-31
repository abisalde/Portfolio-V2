import React from "react";
import { HeadFC } from "gatsby";

/**
 * ? Local Imports
 */
import { Header, LinkType } from "@portfolio-components/header";
import { SEO } from "@portfolio-components/seo";

const About: React.FC = (props) => {
  console.log("Transition Status", props);

  return (
    <>
      <Header view={LinkType.About} />
      <div className="flex sm:flex-row xs:flex-col flex-nowrap justify-between w-full h-full mx-auto xs:p-4 sm:px-10 py-6">
        <div className="sm:w-3/4">
          <h2 className="font-display text-slate-700 dark:text-secondary font-bold xs:text-3xl sm:text-5xl">
            about me
          </h2>
        </div>
        <div className="sm:w-1/4 xs:hidden sm:block">Here Me</div>
      </div>
    </>
  );
};

export default About;

export const Head: HeadFC = () => <SEO pathname={`/${LinkType.About}`} title="About Me" />;
