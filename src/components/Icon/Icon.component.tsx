import * as React from "react";

import { library, IconProp } from "@fortawesome/fontawesome-svg-core";
import { fad } from "@fortawesome/pro-duotone-svg-icons";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { far } from "@fortawesome/pro-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fal, fad, fas, far);

export type IconName =
  | "bars"
  | string;

export interface IconProps {
  name: IconName;
  iconColor?: string;
}

function mapNamePropToFaNames(iconName: IconName): string | string[] {
  switch (iconName) {
    case "bars":
      return ["fas", "bars"];
    default:
      return iconName;
  }
}

const Icon: React.FC<IconProps> = (props: IconProps): JSX.Element => {
  const { name, iconColor } = props;

  const iconName = mapNamePropToFaNames(name);

  return <FontAwesomeIcon color={iconColor} icon={iconName as IconProp} />;
};

export default Icon;
