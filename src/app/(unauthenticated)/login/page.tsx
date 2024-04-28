import LoginForm from "@/component/login/LoginForm";
import { StyledH1, LandingDiv, StyledLink, StyledContainer} from "@/Styles/GeneralStyles";
import React from "react";

export default async function Login(){

    return (
        <>
            <LandingDiv>
                <StyledContainer>
                    <StyledH1> LOGIN PAGE </StyledH1>
                    <LoginForm/>
                    <StyledLink href={"/"}>To Home</StyledLink>
                </StyledContainer>
            </LandingDiv>
        </>
    );
}