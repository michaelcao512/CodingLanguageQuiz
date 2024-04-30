"use client"
import React, {useContext, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {
    ErrorMessage,
    InputDiv,
    StyledButton,
    StyledButtonContainer,
    StyledH1,
    StyledInput,
    StyledLabel,
    StyledLink
} from "@/Styles/GeneralStyles";
import {QuizFlowContext} from "@/lib/context";
import {getUserIdByEmail, setQuizResults} from "@/lib/database";
import {signIn} from "next-auth/react";


// Michael's component
export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const {userChoices} = useContext(QuizFlowContext);

    // upon form submission, begin authorization process
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        const signInData = await signIn('credentials', {
            email: email,
            password: password,
            redirect: false
        });
        if (signInData?.ok === false) {
            // if user is unauthorized, display error message
            setErrorMessage("Invalid login credentials");
            setLoading(false);
        } else {
            // if user is authorized, reset error message and then update personality type based on choices
            // to the database and then redirect them to their profile
            setErrorMessage("");
            const userId = await getUserIdByEmail(email);
            if (userChoices.length > 0) {
                await setQuizResults(userId, userChoices);
            }
            router.push("/profile");
        }
    }

    // upon change of error message, rerender
    useEffect(() => {
        if (errorMessage) {
            setLoading(false);
        }
    }, [errorMessage]);

    return (
        <>
            {loading ? (<StyledH1>Loading...</StyledH1>) :
                (<>
                        <form onSubmit={handleSubmit}>
                            <InputDiv>
                                <StyledLabel>Email</StyledLabel>
                                <StyledInput type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                <StyledLabel>Password</StyledLabel>
                                <StyledInput type="password" value={password}
                                             onChange={(e) => setPassword(e.target.value)}/>
                            </InputDiv>
                            <ErrorMessage>{errorMessage}</ErrorMessage>
                            <StyledButtonContainer><StyledButton
                                type="submit">Login</StyledButton>
                            </StyledButtonContainer>
                        </form>
                        <StyledLink href={"/"}>To Home</StyledLink>
                    </>
                )}
        </>
    )
}