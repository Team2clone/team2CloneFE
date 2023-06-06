import React from "react";
import { useState } from "react";
import * as sVar from "../styles/styleVariables";
import * as style from "../styles/styles"

function Delete({ id, name, iconStateSetter }) {
  const INIT_HEX = sVar.white70;
  const OVER_HEX = sVar.white100;
  const [fillColor, setFillColor] = useState(INIT_HEX);
  const onMouseOver = () => {
    setFillColor(OVER_HEX);
  };
  const onMouseOut = () => {
    setFillColor(INIT_HEX);
  };
  const smallBtnClickHandler = (event) => {
    event.stopPropagation();
    console.log(name)
    iconStateSetter(name)
}
  return (
    <style.TailIcon id={id} name={name} onClick={smallBtnClickHandler}>
      <svg
        width="18"
        height="18"
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        <g className="layer">
          <title>Layer 1</title>
          <path
            d="m14.45,5.1c0.31,0.04 0.55,0.3 0.56,0.61l0,8.57c-0.01,0.95 -0.82,1.82 -1.81,1.83c-2.46,0.02 -4.91,0 -7.37,0c-0.96,-0.01 -1.83,-0.82 -1.83,-1.83l0,-8.57c0.01,-0.29 0.23,-0.56 0.52,-0.61c0.32,-0.05 0.65,0.19 0.7,0.51c0.01,0.04 0.01,0.05 0.01,0.1c0,2.86 -0.02,5.72 0,8.57c0.01,0.32 0.28,0.6 0.6,0.61c2.45,0.02 4.91,0.02 7.36,0c0.32,-0.01 0.6,-0.28 0.61,-0.62l0,-8.56c0.01,-0.29 0.23,-0.56 0.52,-0.6c0.09,-0.02 0.11,-0.01 0.14,-0.01l0,0zm-3.7,1.22c0.11,0.01 0.14,0.02 0.2,0.05c0.2,0.08 0.35,0.28 0.37,0.5c0,0.03 0,0.04 0.01,0.07l0,4.9c-0.01,0.14 -0.02,0.19 -0.06,0.27c-0.18,0.37 -0.79,0.46 -1.05,0.09c-0.07,-0.1 -0.11,-0.23 -0.11,-0.35l0,-4.9c0,-0.11 0.01,-0.14 0.03,-0.2c0.08,-0.22 0.28,-0.38 0.51,-0.41c0.07,-0.01 0.08,0 0.1,0l0,0zm-2.42,0c0.11,0.01 0.14,0.02 0.2,0.05c0.2,0.08 0.35,0.28 0.37,0.5c0,0.03 0,0.04 0,0.07l0,4.9c0,0.14 -0.02,0.19 -0.06,0.27c-0.18,0.37 -0.79,0.46 -1.05,0.09c-0.07,-0.1 -0.11,-0.23 -0.11,-0.35l0,-4.9c0,-0.11 0.01,-0.14 0.03,-0.2c0.08,-0.22 0.28,-0.38 0.51,-0.41c0.06,-0.01 0.08,0 0.1,0l0,0zm-1.88,-2.5l0,-1.84c0,-0.11 0.01,-0.14 0.03,-0.2c0.07,-0.22 0.28,-0.38 0.51,-0.41c0.03,0 0.04,0 0.07,0l4.9,0c0.01,0 0.02,0 0.04,0c0.11,0.01 0.14,0.02 0.2,0.05c0.2,0.08 0.35,0.28 0.37,0.5c0,0.03 0,0.04 0,0.07l0,1.84l3.06,0l0.05,0c0.05,0.01 0.06,0.01 0.11,0.02c0.45,0.12 0.6,0.86 0.15,1.12c-0.08,0.05 -0.13,0.07 -0.31,0.08l-12.24,0c-0.05,0 -0.06,0 -0.11,-0.01c-0.48,-0.08 -0.67,-0.86 -0.2,-1.13c0.09,-0.05 0.13,-0.07 0.31,-0.08l3.06,0l0,0zm4.89,0l0,-1.22l-3.67,0l0,1.22l3.67,0z"
            fill={fillColor}
            id="svg_1"
          />
        </g>
      </svg>
    </style.TailIcon>
  );
}

export default Delete;
