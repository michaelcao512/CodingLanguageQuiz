import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import RegisterForm from "@/component/signup/SignupForm";
import {LandingDiv, StyledContainer, StyledH1} from "@/Styles/GeneralStyles";
import React from "react";

// Register Page
// upon successful quiz completion, users will be redirected to this page where they can create an account
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
                </StyledContainer>
            </LandingDiv>
        </>


    )

}


