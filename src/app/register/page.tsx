
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import RegisterForm from "@/component/signup/SignupForm";
import {StyledH1} from "@/Styles/GeneralStyles";

export default async function RegisterPage() {
    const session = await getServerSession();
    // if the user is already logged in, redirect to the home page
    if (session) {
        redirect('/');
    }

    return (
        <>
            <StyledH1>Register</StyledH1>
            <RegisterForm/>
        </>


    )

}


