import type { Metadata } from "next";
import "@/styles/globals.css";
import { NavBar } from "@/components/ui";
import { AppContainer } from "@/components/containers";

export const metadata: Metadata = {
  title: "",
  description: ""
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <AppContainer>{children}</AppContainer>
      </body>
    </html>
  );
}
