
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import RegisterForm from "@/component/signup/SignupForm";
import {LandingDiv, StyledH1, StyledContainer, StyledLink, StyledP} from "@/Styles/GeneralStyles";
import React, {useContext} from "react";
import {getUserIdByEmail, setQuizResults} from "@/lib/database";
import {QuizFlowContext} from "@/lib/context";

export default async function RegisterPage() {
    const session = await getServerSession();
    // TODO: setquizresults if user is already logged in (assuming they took the quiz)
    //
    // if the user is already logged in, redirect to the log in page
    // const { userChoices }= useContext(QuizFlowContext)
    // if (session) {
    //
    //     if (userChoices.length > 0) {
    //         const email = session.user?.email;
    //         if (email) {
    //             const userId = await getUserIdByEmail(email);
    //             await setQuizResults(userId, userChoices)
    //         }
    //     }
    //     redirect('/login');
    // }

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


