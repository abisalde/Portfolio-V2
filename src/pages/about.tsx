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
      <div>About</div>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-12 w-12">145</div>
    </>
  );
};

export default About;

export const Head: HeadFC = () => <SEO pathname={`/${LinkType.About}`} title="About Me" />;
