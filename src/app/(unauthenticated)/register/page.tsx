
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import RegisterForm from "@/component/signup/SignupForm";
import {LandingDiv, StyledH1, StyledContainer, StyledLink, StyledP} from "@/Styles/GeneralStyles";
import React, {useContext} from "react";
import {getUserIdByEmail, setQuizResults} from "@/lib/database";
import {QuizFlowContext} from "@/lib/context";
import Starfield from "@/component/backgrounds/Starfield";

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
                    <StyledP>To view your results, please sign up or login</StyledP>
                    <RegisterForm/>
                    <StyledLink href="/login">Already have an account? Log in </StyledLink>

                </StyledContainer>
            </LandingDiv>
            <Starfield
                starCount={10000}
                starColor={[255, 255, 255]}
                speedFactor={0.03}
                backgroundColor="black"
            />
        </>


    )

}


