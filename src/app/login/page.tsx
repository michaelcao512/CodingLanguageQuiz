"use client"
import LoginForm from "@/component/login/LoginForm";
import Link from "next/link";
import styled from "styled-components";
import {LoginDiv, StyledH1} from "@/Styles/GeneralStyles";

export default function Login(){
    return (
        <>
            <LoginDiv>
                <StyledH1> LOGIN PAGE </StyledH1>
                <LoginForm/>
                <Link href={"/"}>To Home</Link>
            </LoginDiv>
        </>
    );
}