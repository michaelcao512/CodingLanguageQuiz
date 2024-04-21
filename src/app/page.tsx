"use client"
import Link from "next/link";
import styled from "styled-components";
import {LandingDiv, StyledH1} from "@/Styles/GeneralStyles";




export default function Home() {
  return (
      <>
          <LandingDiv>
              <StyledH1> Personality Quiz! </StyledH1>

                <Link href="/register">To Register </Link>
              <Link href="/login">To Login </Link>
              <Link href={"/quizlanding"}>To Quiz Landing</Link>
          </LandingDiv>
      </>
  );
}
