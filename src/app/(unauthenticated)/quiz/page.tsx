import QuizQuestion from "@/component/quiz/quizquestion";
import {LandingDiv, StyledContainer, StyledH1} from "@/Styles/GeneralStyles";
import React from "react";

// Quiz Page
// users take the quiz here
export default function Quiz(){
    return (
        <>
            <LandingDiv>
                <StyledContainer>
                    <StyledH1> Quiz </StyledH1>
                    <QuizQuestion/>
                </StyledContainer>
            </LandingDiv>
        </>
    );
}