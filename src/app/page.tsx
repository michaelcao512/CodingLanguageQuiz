"use client"
import Link from "next/link";
import styled from "styled-components";
import {LandingDiv, StyledH1, StyledLink} from "@/Styles/GeneralStyles";




export default function Home() {
  return (
      <>
          <LandingDiv>
              <StyledH1> Personality Quiz! </StyledH1>

              <StyledLink href="/register">To Register </StyledLink>
              <StyledLink href="/login">To Login </StyledLink>
              <StyledLink href={"/quizlanding"}>To Quiz Landing</StyledLink>
          </LandingDiv>
      </>
  );
}
