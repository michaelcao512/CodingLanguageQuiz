import Link from "next/link";
import { StyledH1, LandingDiv, StyledLink } from "@/Styles/GeneralStyles";

export default function QuizLanding(){
    return (
        <>
            <LandingDiv>
                <StyledH1> Welcome to the Quiz </StyledH1>

                <StyledLink href="/">To Home</StyledLink>
            </LandingDiv>
        </>
    );
}