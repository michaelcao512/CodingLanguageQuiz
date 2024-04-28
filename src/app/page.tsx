"use client"
import styled from "styled-components";
import {LandingDiv, StyledH1, StyledContainer} from "@/Styles/GeneralStyles";
import {ToButton} from "@/component/buttons/buttons";
import React from "react";

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
                    <StyledButtonContainer>
                        <ToButton
                            destination={"/login"}
                            text={"Sign In"}
                        />
                        <ToButton
                            destination={"/quiz"}
                            text={"Take Quiz"}
                        />
                    </StyledButtonContainer>
                </StyledContainer>
            </LandingDiv>
        </>
    );
}

