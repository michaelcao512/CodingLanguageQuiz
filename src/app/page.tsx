"use client"
import Link from "next/link";
import styled from "styled-components";


const LandingDiv=styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-content: center;
  align-items: center;
`
const StyledH1=styled.h1`
  font-family: Satoshi, sans-serif;
`

const StyledLink= styled.link`
  font-family: Satoshi, sans-serif;
  
`

export default function Home() {
  return (
      <>
          <LandingDiv>
              <StyledH1> Personality Quiz! </StyledH1>

              <Link href="/login">To Login </Link>
              <Link href={"/quizlanding"}>To Quiz Landing</Link>
          </LandingDiv>
      </>
  );
}
