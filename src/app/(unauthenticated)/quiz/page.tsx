import QuizQuestion from "@/component/quiz/quizquestion";
import Starfield from "@/component/backgrounds/Starfield";
import {LandingDiv, StyledContainer, StyledH1, StyledLink} from "@/Styles/GeneralStyles";
import LoginForm from "@/component/login/LoginForm";
import React from "react";


export default function Quiz(){
    return (
        <>
            <LandingDiv>
                <StyledContainer>
                    <StyledH1> Quiz </StyledH1>
                    <QuizQuestion/>
                </StyledContainer>
            </LandingDiv>
            <Starfield
                starCount={10000}
                starColor={[255, 255, 255]}
                speedFactor={0.03}
                backgroundColor="black"
            />
        </>
    );
}