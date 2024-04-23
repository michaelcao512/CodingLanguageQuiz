import {getServerSession} from "next-auth";
import LogOutButton from "@/component/LogOutButton";
import Link from "next/link";
import {StyledH1, StyledLink, StyledContainer, LandingDiv, StyledP} from "@/Styles/GeneralStyles";

export default async function Profile() {
    const session = await getServerSession();
    console.log("Session: ", session);
    if (!session) {
        return (
            <>
                <LandingDiv>
                    <StyledContainer>
                        <StyledH1>Profile</StyledH1>
                        <p> UNAUTHORIZED </p>
                        <Link href="/">To Home</Link>
                    </StyledContainer>
                </LandingDiv>
            </>
        )

    } else {
        const name = session?.user?.name || "no name";

        return (
            <LandingDiv>
                <StyledContainer>
                    <StyledH1>Profile</StyledH1>
                    <StyledP>Welcome {name}</StyledP>
                    <LogOutButton/>
                    <StyledLink href="/">To Home</StyledLink>
                    </StyledContainer>
            </LandingDiv>
        )
    }
}

