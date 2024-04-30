import LoginForm from "@/component/login/LoginForm";
import {LandingDiv, StyledContainer, StyledH1} from "@/Styles/GeneralStyles";
import React from "react";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";

// Login Page
// users can sign in here
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
                </StyledContainer>
            </LandingDiv>
        </>
    );
}