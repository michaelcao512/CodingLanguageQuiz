
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import RegisterForm from "@/component/signup/SignupForm";
import {LandingDiv, StyledH1} from "@/Styles/GeneralStyles";

export default async function RegisterPage() {
    const session = await getServerSession();
    // if the user is already logged in, redirect to the home page
    if (session) {
        redirect('/');
    }

    return (
        <>
            <LandingDiv>
                <StyledH1>Register</StyledH1>
                <RegisterForm/>
            </LandingDiv>
        </>


    )

}


