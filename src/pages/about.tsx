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
      <div className="flex sm:flex-row xs:flex-col flex-nowrap justify-between w-full h-full mx-auto xs: sm:p-10">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-12 w-12 sm:w-3/4">145</div>
        <div className="sm:w-1/4 xs:hidden">Test</div>
      </div>
    </>
  );
};

export default About;

export const Head: HeadFC = () => <SEO pathname={`/${LinkType.About}`} title="About Me" />;
