import React from "react";
import type { GatsbyBrowser } from "gatsby";

/**
 * ? Local Imports
 */
import "./src/styles/index.css";
import "./src/styles/global.css";
import "./src/styles/colors.css";

import { Layout } from "./src/shared/components/layout";
import { useWindowSize } from "./src/hooks";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element, props }) => {
  useWindowSize();
  return <Layout {...props}>{element}</Layout>;
};
