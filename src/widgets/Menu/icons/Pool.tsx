import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const top100 = require("./top100.svg") as string;

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img style={{ marginRight: '5px', maxWidth: '27px' }} src={top100} />
  );
};

export default Icon;
