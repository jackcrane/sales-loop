// https://react-svgr.com/playground/?native=true

import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

export const TablerAlertHexagon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color || "black"}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={props.strokeWidth || 2}
    className="icon icon-tabler icon-tabler-alert-hexagon"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M19.875 6.27c.7.398 1.13 1.143 1.125 1.948v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1-2.184 0l-6.75-4.27A2.225 2.225 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033zM12 8v4M12 16h.01" />
  </Svg>
);

export const TablerScan = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color || "black"}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={props.strokeWidth || 2}
    className="icon icon-tabler icon-tabler-scan"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M4 7V6a2 2 0 0 1 2-2h2M4 17v1a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v1M16 20h2a2 2 0 0 0 2-2v-1M5 12h14" />
  </Svg>
);

export const TablerCart = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color || "black"}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={props.strokeWidth || 2}
    className="icon icon-tabler icon-tabler-shopping-cart"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M4 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M15 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <Path d="M17 17H6V3H4" />
    <Path d="m6 5 14 1-1 7H6" />
  </Svg>
);

export const TablerAffiliate = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color || "black"}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={props.strokeWidth || 2}
    className="icon icon-tabler icon-tabler-affiliate"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m5.931 6.936 1.275 4.249m5.607 5.609 4.251 1.275M11.683 12.317l5.759-5.759M4 5.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M17 5.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M17 18.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M4 15.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0" />
  </Svg>
);

export const TablerCartX = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color || "black"}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={props.strokeWidth || 2}
    className="icon icon-tabler icon-tabler-shopping-cart-x"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M4 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M15 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <Path d="M17 17H6V3H4" />
    <Path d="m6 5 8 .571m5.43 4.43-.429 3h-13M17 3l4 4M21 3l-4 4" />
  </Svg>
);

export const TablerDatabaseSearch = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color || "black"}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={props.strokeWidth || 2}
    className="icon icon-tabler icon-tabler-database-search"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3" />
    <Path d="M4 6v6c0 1.657 3.582 3 8 3m8-3.5V6" />
    <Path d="M4 12v6c0 1.657 3.582 3 8 3M15 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0M20.2 20.2 22 22" />
  </Svg>
);

export const TablerHome = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color || "black"}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={props.strokeWidth || 2}
    className="icon icon-tabler icon-tabler-home"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M5 12H3l9-9 9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
    <Path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
  </Svg>
);

export const TablerCartAdd = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color || "black"}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={props.strokeWidth || 2}
    className="icon icon-tabler icon-tabler-shopping-cart-plus"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M4 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M15 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <Path d="M17 17H6V3H4" />
    <Path d="m6 5 6 .429m7.138 6.573-.143 1h-13M15 6h6m-3-3v6" />
  </Svg>
);

export const TablerBackspace = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color || "black"}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={props.strokeWidth || 2}
    className="icon icon-tabler icon-tabler-backspace"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M20 6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5-5a1.5 1.5 0 0 1 0-2l5-5zM12 10l4 4m0-4-4 4" />
  </Svg>
);

export const RightArrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color || "black"}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={props.strokeWidth || 2}
    className="icon icon-tabler icon-tabler-arrow-big-right-lines"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M12 9V5.414a1 1 0 0 1 1.707-.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586A1 1 0 0 1 12 18.586V15H9V9h3zM3 9v6M6 9v6" />
  </Svg>
);

export const TablerChevronDown = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color || "black"}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={props.strokeWidth || 2}
    className="icon icon-tabler icon-tabler-chevron-down"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m6 9 6 6 6-6" />
  </Svg>
);

export const TablerClose = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color || "black"}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={props.strokeWidth || 2}
    className="icon icon-tabler icon-tabler-x"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M18 6 6 18M6 6l12 12" />
  </Svg>
);

export const TablerSquareCheck = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color || "black"}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={props.strokeWidth || 2}
    className="icon icon-tabler icon-tabler-square-check"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <Path d="m9 12 2 2 4-4" />
  </Svg>
);

export const TablerDots = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color || "black"}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={props.strokeWidth || 2}
    className="icon icon-tabler icon-tabler-dots-circle-horizontal"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0M8 12v.01M12 12v.01M16 12v.01" />
  </Svg>
);

export const TablerSettings = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color || "black"}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={props.strokeWidth || 2}
    className="icon icon-tabler icon-tabler-settings"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37 1 .608 2.296.07 2.572-1.065z" />
    <Path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
  </Svg>
);

export const TablerAccount = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color || "black"}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={props.strokeWidth || 2}
    className="icon icon-tabler icon-tabler-user"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M8 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
  </Svg>
);

export const TablerBox = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color || "black"}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={props.strokeWidth || 2}
    className="icon icon-tabler icon-tabler-box"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3M12 12l8-4.5M12 12v9M12 12 4 7.5" />
  </Svg>
);

export const TablerBrain = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color || "black"}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={props.strokeWidth || 2}
    className="icon icon-tabler icon-tabler-brain"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M15.5 13a3.5 3.5 0 0 0-3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1-7 0v-1.8" />
    <Path d="M17.5 16a3.5 3.5 0 0 0 0-7H17" />
    <Path d="M19 9.3V6.5a3.5 3.5 0 0 0-7 0M6.5 16a3.5 3.5 0 0 1 0-7H7" />
    <Path d="M5 9.3V6.5a3.5 3.5 0 0 1 7 0v10" />
  </Svg>
);

export const TablerHeart = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color || "black"}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={props.strokeWidth || 2}
    className="icon icon-tabler icon-tabler-heart"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M19.5 12.572 12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572" />
  </Svg>
);

export const TablerTag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color || "black"}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={props.strokeWidth || 2}
    className="icon icon-tabler icon-tabler-tag"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Circle cx={8.5} cy={8.5} r={1} fill="currentColor" />
    <Path d="M4 7v3.859c0 .537.213 1.052.593 1.432l8.116 8.116a2.025 2.025 0 0 0 2.864 0l4.834-4.834a2.025 2.025 0 0 0 0-2.864L12.29 4.593A2.025 2.025 0 0 0 10.859 4H7a3 3 0 0 0-3 3z" />
  </Svg>
);

export const TextToIcon = (text) => {
  switch (text) {
    case "Account":
      return <TablerAccount />;
    case "Box":
      return <TablerBox />;
    case "Brain":
      return <TablerBrain />;
    case "Heart":
      return <TablerHeart />;
    case "Home":
      return <TablerHome />;
    case "Settings":
      return <TablerSettings />;
    case "DatabaseSearch":
      return <TablerDatabaseSearch />;
    default:
      return <TablerAccount />;
  }
};
