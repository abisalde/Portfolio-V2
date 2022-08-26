import React from "react";

import type { HeadFC } from "gatsby";

/**
 * ? Local Imports
 */
import { Header, LinkType } from "@portfolio-components/header";
import { SEO } from "@portfolio-components/seo";

const Contact: React.FC = () => {
  return (
    <>
      <Header view={LinkType.Contact} />
      <div>Contact</div>
    </>
  );
};

export default Contact;

export const Head: HeadFC = () => <SEO pathname={`/${LinkType.Contact}`} title="Contact Me" />;
