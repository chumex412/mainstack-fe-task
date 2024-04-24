import localFont from "next/font/local";

export const degular = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Degular/Degular-Light.otf",
      weight: "400"
    },
    {
      path: "../../public/assets/fonts/Degular/Degular-Medium.otf",
      weight: "500"
    },
    {
      path: "../../public/assets/fonts/Degular/Degular-Semibold.otf",
      weight: "600"
    },
    {
      path: "../../public/assets/fonts/Degular/Degular-Bold.otf",
      weight: "700"
    }
  ],
  variable: "--font-degular"
});
