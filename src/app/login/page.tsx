"use client"
import LoginForm from "@/component/login/LoginForm";
import Link from "next/link";
import styled from "styled-components";
import { StyledH1, LandingDiv, StyledLink, StyledContainer} from "@/Styles/GeneralStyles";

export default function Login(){
    return (
        <>
            <LandingDiv>
                <StyledContainer>
                    <StyledH1> ~Login~ </StyledH1>
                    <LoginForm/>
                    <StyledLink href={"/"}>To Home</StyledLink>
                </StyledContainer>
            </LandingDiv>
        </>
    );
}