"use client"
import LoginForm from "@/component/login/LoginForm";
import Link from "next/link";
import styled from "styled-components";
import { StyledH1, LandingDiv, StyledLink} from "@/Styles/GeneralStyles";

export default function Login(){
    return (
        <>
            <LandingDiv>
                <StyledH1> LOGIN PAGE </StyledH1>
                <LoginForm/>
                <StyledLink href={"/"}>To Home</StyledLink>
            </LandingDiv>
        </>
    );
}