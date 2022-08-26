import React from "react";
import type { HeadFC } from "gatsby";
/**
 * ? Local Imports
 */
import { Header, LinkType } from "@portfolio-components/header";
import { SEO } from "@portfolio-components/seo";

const Skills: React.FC = () => {
  return (
    <>
      <Header view={LinkType.Skills} />
      <div>Skills</div>
    </>
  );
};

export const Head: HeadFC = () => <SEO pathname={`/${LinkType.Skills}`} title="Skills | Portfolio" />;

export default Skills;
