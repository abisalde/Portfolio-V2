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
    </>
  );
};

export default About;

export const Head: HeadFC = () => <SEO pathname={`/${LinkType.About}`} title="About Me" />;
