"use client"
import styled from "styled-components";
import {LandingDiv, StyledH1, StyledLink, StyledContainer, StyledButton, StyledCustomLink} from "@/Styles/GeneralStyles";
import {ToButton} from "@/component/buttons/buttons";

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
        </>
    );
}

