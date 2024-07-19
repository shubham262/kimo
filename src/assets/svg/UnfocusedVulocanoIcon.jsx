import React from 'react';
import {G, Mask, Path, Rect, Svg} from 'react-native-svg';
const UnfocusedVulocanoIcon = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Mask
        id="mask0_6_1111"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24">
        <Rect width="24" height="24" fill="#D9D9D9" />
      </Mask>
      <G mask="url(#mask0_6_1111)">
        <Path
          d="M1 18L7 10L11.5 16H19L14 9.35L11.5 12.65L10.25 11L14 6L23 18H1ZM5 16H9L7 13.325L5 16Z"
          fill="#001A1A"
        />
      </G>
    </Svg>
  );
};

export default UnfocusedVulocanoIcon;
