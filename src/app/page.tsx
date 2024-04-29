import React from "react";
import {LandingDiv, StyledButtonContainer, StyledContainer, StyledH1} from "@/Styles/GeneralStyles";
import {ToButton} from "@/component/buttons/buttons";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";

import { getUserIdByEmail } from "@/lib/database";

export default async function Home() {
    const session = await getServerSession();

    if (session) {
        const email = session?.user?.email;
        const userId = getUserIdByEmail(email || "no email"); 

        redirect(`/profile/${userId}`);
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

