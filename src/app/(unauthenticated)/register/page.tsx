
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import RegisterForm from "@/component/signup/SignupForm";
import {LandingDiv, StyledH1, StyledContainer, StyledLink, StyledP} from "@/Styles/GeneralStyles";
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
                    <StyledP>To view your results, please sign up or login</StyledP>
                    <StyledH1>Register</StyledH1>
                    <RegisterForm/>
                    <StyledLink href="/login">Already have an account? Log in </StyledLink>

                </StyledContainer>
            </LandingDiv>
        </>


    )

}


