import React from "react";
import type { HeadFC } from "gatsby";

/**
 * ? Local Imports
 */
import { Header, LinkType } from "@portfolio-components/header";
import { SEO } from "@portfolio-components/seo";

const Projects: React.FC = () => {
  return (
    <>
      <Header view={LinkType.Projects} />
      <div>Project</div>
    </>
  );
};

export default Projects;

export const Head: HeadFC = () => <SEO pathname={`/${LinkType.Projects}`} title="All Projects" />;
