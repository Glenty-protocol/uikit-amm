import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg style={{ width: '24px', marginRight: '5px' }} viewBox="0 0 24.39 19.18"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="TEXT_AND_INFOS" data-name="TEXT AND INFOS"><rect style={{ fill: '#5f6da6' }} x="2.8" y="5.18" width="5.6" height="1.4" /><path style={{ fill: '#5f6da6' }} d="M5.6,8a5.6,5.6,0,1,0,5.6,5.6A5.6,5.6,0,0,0,5.6,8Zm0,8.4a2.8,2.8,0,1,1,2.8-2.8A2.8,2.8,0,0,1,5.6,16.38Z" /><path style={{ fill: '#5f6da6' }} d="M20.19,10.78a4.2,4.2,0,1,0,4.2,4.2A4.21,4.21,0,0,0,20.19,10.78Zm0,5.6a1.4,1.4,0,1,1,1.4-1.4A1.4,1.4,0,0,1,20.19,16.38Z" /><path style={{ fill: '#5f6da6' }} d="M20.19,9.38a5.61,5.61,0,0,1,1.43.2V4.17H14.93L13.19,2.43,14.63,1l-1-1L9.77,3.87l1,1L12.2,3.42l1.51,1.51S12,8.05,10.19,8.31a7,7,0,0,1,2.41,5.27,7.15,7.15,0,0,1-.14,1.4h2.13A5.62,5.62,0,0,1,20.19,9.38Z" /></g></g></svg>
  );
};

export default Icon;
