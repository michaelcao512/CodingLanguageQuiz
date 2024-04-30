import type {Metadata} from "next";
import React from "react";
import NavBar from "@/component/navbar/NavBar";

export const metadata: Metadata = {
    title: "Personality App | Profile",
    description: "Your personality type",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <NavBar/>
            {children}
        </>
    );
}

