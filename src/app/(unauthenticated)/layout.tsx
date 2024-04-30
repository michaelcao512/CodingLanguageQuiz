import type {Metadata} from "next";
import React from "react";
import {QuizFlowProvider} from "@/lib/context";

export const metadata: Metadata = {
    title: "PersonalityApp | QUIZ",
    description: "Taking the quiz to find out what programming language you are!",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <QuizFlowProvider>
            {children}
        </QuizFlowProvider>
    )
}