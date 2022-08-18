import React from "react";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type IconsProps = {
  icon: IconDefinition;
};

const Icon = ({ icon }: IconsProps): JSX.Element => {
  return <FontAwesomeIcon icon={icon} />;
};

export default Icon;
