import type {Metadata} from "next";
import StyledComponentsRegistry from "@/lib/registry";
import {GlobalStyle} from "@/Styles/GeneralStyles";
import React from "react";
import {QuizFlowProvider} from "@/lib/context";

export const metadata: Metadata = {
    title: "PersonalityApp | QUIZ",
    description: "quiz",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <QuizFlowProvider>
            {children}
        </QuizFlowProvider>
    )
}