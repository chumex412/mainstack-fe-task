import { FC, SVGAttributes, SVGProps } from "react";

const InsertIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={20}
      height={20}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha"
      }}
    >
      <path fill="#D9D9D9" d="M0 0h20v20H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#56616B"
        className="nav-icon"
        d="M6.7 13.97a.445.445 0 0 0 .45-.46V9.13A.43.43 0 0 0 7 8.8a.44.44 0 0 0-.31-.13.44.44 0 0 0-.33.13.44.44 0 0 0-.13.32v4.38a.45.45 0 0 0 .46.46Zm3.3 0a.445.445 0 0 0 .46-.46V6.48a.43.43 0 0 0-.13-.32.44.44 0 0 0-.32-.13.44.44 0 0 0-.33.13.44.44 0 0 0-.13.32v7.03a.45.45 0 0 0 .46.46Zm3.31 0c.13 0 .24-.04.32-.13.1-.09.13-.2.13-.33v-1.79a.43.43 0 0 0-.13-.31.43.43 0 0 0-.32-.14.43.43 0 0 0-.33.14c-.09.1-.13.2-.13.31v1.79c0 .13.05.24.13.33.1.09.2.13.33.13Zm-9.17 3.06c-.31 0-.58-.12-.82-.35-.23-.24-.35-.5-.35-.82V4.14c0-.31.12-.58.35-.82.24-.23.5-.35.82-.35h11.72c.31 0 .58.12.82.35.23.24.35.5.35.82v11.72c0 .31-.12.58-.35.82-.24.23-.5.35-.82.35H4.14Zm0-.92h11.72c.06 0 .12-.02.17-.08a.25.25 0 0 0 .08-.17V4.14a.25.25 0 0 0-.08-.17.25.25 0 0 0-.17-.08H4.14a.25.25 0 0 0-.17.08.25.25 0 0 0-.08.17v11.72c0 .06.02.12.08.17.05.06.11.08.17.08Z"
      />
    </g>
  </svg>
);
export default InsertIcon;