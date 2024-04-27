"use client"
import React, {useContext, useEffect, useState} from "react";
import {getSession, signIn} from "next-auth/react";
import { useRouter } from "next/navigation";
import {InputDiv, StyledButton, StyledInput, StyledLabel} from "@/Styles/GeneralStyles";
import {QuizFlowContext} from "@/lib/context";
import {deleteUserChoices} from "@/lib/database";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();


    const { userChoices } = useContext(QuizFlowContext);
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const signInData = await signIn('credentials', {
            email: email,
            password: password,
            // callbackUrl: '/profile'
            redirect: false

        });
        if (signInData?.ok === false) {
            // if user is unauthorized
            setErrorMessage("Invalid login credentials")
        } else {
            // if user is authorized
            setErrorMessage("")

            const session = await getSession();
            // const userId = session?.user

            // const userId = signIndata.user.id;

            router.push("/profile");
            //     redirect to a home page
        }
    }

    useEffect(() => {
    }, [errorMessage]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <InputDiv>
                    <StyledLabel>Email</StyledLabel>
                    <StyledInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <StyledLabel>Password</StyledLabel>
                    <StyledInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </InputDiv>
                <StyledButton type="submit">Login</StyledButton>
                <p>{errorMessage}</p>
            </form>
        </div>
    )
}