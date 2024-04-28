"use client"
import styled from "styled-components";
import {LandingDiv, StyledH1, StyledLink, StyledContainer, StyledButton, StyledCustomLink} from "@/Styles/GeneralStyles";
import {ToButton} from "@/component/buttons/buttons";
import Starfield from "@/component/backgrounds/Starfield";
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
                            destination={"/register"}
                            text={"Sign In"}
                        />
                        <ToButton
                            destination={"/quiz"}
                            text={"Take Quiz"}
                        />
                    </StyledButtonContainer>
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

