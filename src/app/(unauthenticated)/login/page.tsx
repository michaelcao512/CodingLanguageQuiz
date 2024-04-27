import LoginForm from "@/component/login/LoginForm";
import { StyledH1, LandingDiv, StyledLink, StyledContainer} from "@/Styles/GeneralStyles";
import {redirect} from "next/navigation";
import {getServerSession} from "next-auth";
import Starfield from "@/component/backgrounds/Starfield";
import React from "react";

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
            <Starfield
                starCount={10000}
                starColor={[255, 255, 255]}
                speedFactor={0.03}
                backgroundColor="black"
            />
        </>
    );
}