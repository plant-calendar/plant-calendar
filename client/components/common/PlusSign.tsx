import React from 'react';
import {COLORS} from "../style-config";

export default props => (
  <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
  >
    <path
        d="M28 16H16V28H12V16H0V12H12V0H16V12H28V16Z"
        fill={props.color}
    />
  </svg>
);
