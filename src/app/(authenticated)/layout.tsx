import type { Metadata } from "next";
import React from "react";
import NavBar from "@/component/navbar/NavBar";
import {GlobalStyle} from "@/Styles/GeneralStyles";
import StyledComponentsRegistry from "@/lib/registry";
import Starfield from "@/component/backgrounds/Starfield";


export const metadata: Metadata = {
    title: "Personality App | Profile",
    description: "results of personality test",
};

export default function RootLayout({

                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <GlobalStyle/>Ï<NavBar/>

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

