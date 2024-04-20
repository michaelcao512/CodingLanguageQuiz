"use client"
import LoginForm from "@/app/component/login/LoginForm";
import Link from "next/link";
import styled from "styled-components";

const StyledH1 = styled.h1`
  align-items: center;
  font-family: Satoshi, sans-serif;
`

const LoginDiv=styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-content: center;
  align-items: center;
`

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