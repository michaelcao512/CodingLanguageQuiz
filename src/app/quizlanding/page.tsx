import Link from "next/link";
import { StyledH1, LandingDiv, StyledLink, StyledContainer, StyledButton } from "@/Styles/GeneralStyles";

export default function QuizLanding(){
    return (
        <>
            <LandingDiv>
                <StyledContainer>
                    <StyledH1> Welcome to the Quiz </StyledH1>
                    <StyledButton>Start</StyledButton>
                    <StyledLink href="/">To Home</StyledLink>
                </StyledContainer>
            </LandingDiv>
        </>
    );
}