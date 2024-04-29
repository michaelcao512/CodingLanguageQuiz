import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import RegisterForm from "@/component/signup/SignupForm";
import {LandingDiv, StyledContainer, StyledH1, StyledLink} from "@/Styles/GeneralStyles";
import React from "react";

export default async function RegisterPage() {
    const session = await getServerSession();
    // if the user is already logged in, redirect to the home page
    if (session) {
            redirect('/profile');
    }

    return (
        <>
            <LandingDiv>
                <StyledContainer>
                    <StyledH1>Register</StyledH1>
                    <RegisterForm/>
                    <StyledLink href={"/"}>Exit</StyledLink>
                </StyledContainer>
            </LandingDiv>
        </>


    )

}


