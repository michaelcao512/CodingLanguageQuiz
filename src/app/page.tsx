import React from "react";
import {LandingDiv, StyledButtonContainer, StyledContainer, StyledH1} from "@/Styles/GeneralStyles";
import {ToButton} from "@/component/buttons/buttons";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";

export default async function Home() {
    const session = await getServerSession();
    if (session) {
        redirect("/profile");
    }

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

