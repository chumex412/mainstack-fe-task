import { FC, SVGAttributes, SVGProps } from "react";

const HomeIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
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
          d="M4.72 16.11h3.22v-4.5c0-.18.06-.32.17-.43a.57.57 0 0 1 .42-.17h2.95c.16 0 .3.06.4.17.12.11.18.25.18.42v4.51h3.22v-7.8l-.03-.12a.31.31 0 0 0-.08-.09l-5.02-3.77a.25.25 0 0 0-.15-.05.25.25 0 0 0-.15.05L4.83 8.1a.31.31 0 0 0-.08.1.24.24 0 0 0-.03.1v7.81Zm-.91 0v-7.8c0-.19.04-.36.11-.52.08-.16.2-.3.36-.4l5.02-3.8c.2-.15.44-.23.7-.23.26 0 .5.08.7.23l5.02 3.8c.16.1.28.24.36.4.07.16.11.33.11.53v7.8c0 .24-.09.45-.27.63a.88.88 0 0 1-.64.28h-3.54a.57.57 0 0 1-.42-.17.57.57 0 0 1-.17-.43v-4.5h-2.3v4.5c0 .17-.05.31-.17.43a.56.56 0 0 1-.4.17H4.7a.87.87 0 0 1-.63-.28.88.88 0 0 1-.27-.64Z"
        />
      </g>
    </svg>
  );
};

export default HomeIcon;
