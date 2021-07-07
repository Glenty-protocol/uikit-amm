import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const tractor = require("./tractor.svg") as string;

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img style={{ width: '24px', marginRight: '5px' }} src={tractor} />
  );
};

export default Icon;
