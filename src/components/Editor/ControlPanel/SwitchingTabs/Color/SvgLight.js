import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const SvgLight = ({ color, shadow, isActive }) => {

  return (
    <div className={'w-full text-center'}>
      <i className="fa fa-lightbulb-o text-3xl active" style={{
        color: !isActive ? color : "white",
        textShadow: isActive ? shadow : undefined,
        // 'rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(255, 42, 77) 0px 0px 8px, rgb(255, 42, 77) 0px 0px 12px, rgb(255, 42, 77) 0px 0px 16px, rgb(255, 42, 77) 0px 0px 22px, rgb(255, 42, 77) 0px 0px 30px',
      }}/>
    </div>
  )
  // return (
  //   <div style={{background: 'transparent'}}>
  //     <FontAwesomeIcon
  //       icon={faLightbulb}
  //       className="fa-lightbulb fa-sm text-2xl rounded-xl"
  //       style={{
  //         color: isActive ? 'white' : color,
  //         backgroundColor: isActive ? color : undefined,
  //         boxShadow: isActive ? shadow : undefined
  //       }}
  //     />
  //   </div>
  // );
}

export default SvgLight;
