import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import {GlobalStyle} from "@/Styles/GeneralStyles";
import Starfield from "@/component/backgrounds/Starfield";
import React from "react";


export const metadata: Metadata = {
  title: "Personality App",
  description: "What type of programming language are you? Take the quiz to find out!",
};

export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
      <GlobalStyle/>
      <StyledComponentsRegistry>
          {children}
      </StyledComponentsRegistry>
      <Starfield
          starCount={10000}
          starColor={[255, 255, 255]}
          speedFactor={0.03}
          backgroundColor="black"
      />
      </body>
    </html>
  );
}

