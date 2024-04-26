import {LandingDiv, StyledH1, StyledLink, StyledContainer} from "@/Styles/GeneralStyles";
export default function Home() {


  return (
    <LandingDiv>
        <StyledContainer>
            <StyledH1> Personality Quiz! </StyledH1>

            <StyledLink href="/register">To Register </StyledLink>
            <StyledLink href="/login">To Login </StyledLink>
            <StyledLink href={"/quizlanding"}>To Quiz Landing</StyledLink>
        </StyledContainer>
    </LandingDiv>
  );
}
