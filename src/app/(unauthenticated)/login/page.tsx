import LoginForm from "@/component/login/LoginForm";
import {LandingDiv, StyledContainer, StyledH1, StyledLink} from "@/Styles/GeneralStyles";
import React from "react";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";

export default async function Login(){
    const session = await getServerSession();
    if (session) {
        redirect('/profile');
    }

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