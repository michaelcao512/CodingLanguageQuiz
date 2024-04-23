"use client"
import Link from "next/link";
import styled from "styled-components";
import {LandingDiv, StyledH1, StyledLink, StyledContainer, StyledButton, StyledCustomLink} from "@/Styles/GeneralStyles";

const StyledButtonContainer=styled.div`
  display: flex;
  flex-direction: row;
`


export default function Home() {
  return (
      <>
          <LandingDiv>
              <StyledContainer>
                  <StyledH1> Personality Quiz! </StyledH1>

                  {/*<StyledLink href="/register">To Register </StyledLink>*/}
                  <StyledButtonContainer>
                      <StyledCustomLink href="/login">
                          <StyledButton>To Login</StyledButton>
                      </StyledCustomLink>
                      {/*<StyledLink href={"/quizlanding"}>To Quiz Landing</StyledLink>*/}
                      <StyledCustomLink href={"/quizlanding"}>
                          <StyledButton>Start Quiz</StyledButton>
                      </StyledCustomLink>
                  </StyledButtonContainer>
              </StyledContainer>
          </LandingDiv>
      </>
  );
}
