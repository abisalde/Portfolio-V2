import React from "react";
import type { GatsbyBrowser } from "gatsby";

/**
 * ? Local Imports
 */
import "./src/styles/index.css";
import "./src/styles/global.css";
import "./src/styles/colors.css";

import { Layout } from "./src/shared/components/layout";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
