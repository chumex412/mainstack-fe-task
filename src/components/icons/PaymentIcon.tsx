import { FC, SVGAttributes, SVGProps } from "react";

const PaymentIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
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
          d="M3.15 15.94c-.4 0-.73-.14-1-.42a1.37 1.37 0 0 1-.43-1v-7.5c0-.15.06-.29.17-.4a.56.56 0 0 1 .42-.17c.16 0 .3.06.4.17.12.11.18.25.18.4v7.5c0 .06.03.12.08.17.05.06.11.08.18.08h12.1c.15 0 .29.06.4.17a.57.57 0 0 1 0 .83.56.56 0 0 1-.4.17H3.15Zm2.88-2.87c-.4 0-.73-.14-1-.42a1.37 1.37 0 0 1-.42-1V5.42c0-.4.14-.73.41-1 .28-.28.62-.42 1-.42h10.83c.4 0 .73.14 1 .42.29.27.43.6.43 1v6.23c0 .4-.14.73-.42 1-.28.28-.61.42-1 .42H6.02Zm1.2-1.16c0-.41-.14-.76-.43-1.05a1.4 1.4 0 0 0-1.03-.43v1.22c0 .07.03.13.08.18.05.05.1.08.18.08h1.2Zm8.42 0h1.2c.07 0 .13-.03.18-.08a.25.25 0 0 0 .08-.18v-1.22c-.4 0-.75.15-1.03.43-.28.3-.43.64-.43 1.05Zm-4.21-1.42c.55 0 1.01-.19 1.39-.57.37-.38.56-.84.56-1.4 0-.54-.19-1-.57-1.38a1.89 1.89 0 0 0-1.38-.56c-.55 0-1.01.19-1.4.56-.37.37-.56.84-.56 1.4 0 .54.19 1 .56 1.38.38.38.85.57 1.4.57ZM5.77 6.64c.4 0 .75-.15 1.03-.43.29-.3.43-.64.43-1.05h-1.2a.25.25 0 0 0-.18.08.25.25 0 0 0-.08.18v1.22Zm11.34 0V5.42a.25.25 0 0 0-.08-.18.25.25 0 0 0-.18-.08h-1.2c0 .41.15.76.43 1.05.29.28.63.43 1.03.43Z"
        />
      </g>
    </svg>
  );
};

export default PaymentIcon;
