"use client"
import React, { useState } from "react";

export interface QuizFlowContextType {
    userChoices: number[];
    setUserChoices: (userChoices: number[]) => void;
    userId: number;
    setUserId: (userId: number) => void;
}

export const QuizFlowContext = React.createContext<QuizFlowContextType>({
    userChoices: [],
    setUserChoices: () => {},
    userId: 0,
    setUserId: () => {}
});

export function QuizFlowProvider({children}: { children: React.ReactNode }) {
    const [userChoices, setUserChoices] = useState<number[]>([]);
    const [userId, setUserId] = useState<number>(0); // default value

    return (
        <QuizFlowContext.Provider value={{userChoices, setUserChoices, userId, setUserId}}>
            {children}
        </QuizFlowContext.Provider>
    )
}