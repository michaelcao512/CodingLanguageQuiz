"use client"
import React, {useContext, useEffect, useState} from "react"

import {useFormState} from "react-dom";
import {validateFormAction} from "@/lib/validation"
import {
    ErrorMessage,
    InputDiv,
    StyledButton,
    StyledButtonContainer,
    StyledH1,
    StyledInput,
    StyledLabel,
    StyledLink,
    StyledP
} from "@/Styles/GeneralStyles";
import {QuizFlowContext} from "@/lib/context";
import {setQuizResults} from "@/lib/database";
import {signIn} from "next-auth/react";


const initialState: SignupFormState = {
    formData: {
        name: '',
        email: '',
        password: '',
        biography: ''
    },
    buttonDisabled: true,
    nameError: '',
    emailError: '',
    passwordError: '',
};


function RegisterForm() {
    const context = useContext(QuizFlowContext)

    const [formState, formAction] = useFormState(validateFormAction, initialState);
    const [error, setError] = useState('');

    // interacted fields for displaying error messages
    const [interactedFields, setInteractedFields] = useState({
        name: false,
        email: false,
        password: false,
    });

    const [loading, setLoading] = useState(false);

    // after user registered redirect to login page
    const [userRegistered, setUserRegistered] = useState(false);
    useEffect(() => {
        if (userRegistered) {
            // creates associated UserChoices objects for user and get personality type
            const updateQuizResults = async () => {
                await setQuizResults(context.userId, context.userChoices);
                await signIn('credentials', {
                    email: formState.formData.email,
                    password: formState.formData.password,
                    callbackUrl: '/profile'
                });
            };
            updateQuizResults().then();
        }
    }, [userRegistered, loading]);

    useEffect(() => {
    }, [loading, error]);

    // input handling for form validation
    async function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const {name} = event.target;
        setInteractedFields({...interactedFields, [name]: true});

        const FD = new FormData(event.target.form as HTMLFormElement);
        formAction(FD);
    }

    // submit form
    async function handleSubmit() {
        setError('loading...');
        const {name, email, password, biography} = formState.formData;
        const body = JSON.stringify({name, email, password, biography});
        const emailFetch = await fetch(`api/users/register/checkAvailable/email/${email}`);
        const emailData = await emailFetch.json();

        if (!emailData) {
            return;
        }
        const emailAvailable = emailData.available;
        if (!emailAvailable) {
            setError("Email already exists");
            setLoading(false);
            return;
        }
        setLoading(true);

        try {
            const response = await fetch('api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: body
            });
            const data = await response.json();
            if (response.status === 200) {
                context.setUserId(data.user.id);
                setUserRegistered(true);
            } else {
                setError("Unable to register user");
                setLoading(false);
            }
        } catch (error) {
            setError("An error occurred during submission");
        }
    }

    return (
        <>

            {loading ? (<StyledH1>Loading...</StyledH1>) :
                (
                    <>
                        <StyledP>To view your results, please sign up</StyledP>
                        <form action={formAction} onSubmit={handleSubmit} autoComplete={'new-password'}>
                            <>
                                <InputDiv>
                                    <StyledLabel>Name</StyledLabel>
                                    {interactedFields.name && <ErrorMessage>{formState.nameError}</ErrorMessage>}
                                    <StyledInput type="text" name="name" onChange={handleChange}/>
                                </InputDiv>
                                <InputDiv>
                                    <StyledLabel>Email</StyledLabel>
                                    {interactedFields.email && <ErrorMessage>  {formState.emailError}</ErrorMessage>}
                                    <StyledInput type="email" name="email" onChange={handleChange}/>
                                </InputDiv>
                                <InputDiv>
                                    <StyledLabel>Password</StyledLabel>
                                    {interactedFields.password &&
                                        <ErrorMessage>  {formState.passwordError}</ErrorMessage>}
                                    <StyledInput type="password" name="password" onChange={handleChange}/>
                                </InputDiv>
                                <InputDiv>
                                    <StyledLabel>Biography</StyledLabel>
                                        <StyledInput type="text" name="biography" onChange={handleChange}/>
                                </InputDiv>
                                <ErrorMessage>{error}</ErrorMessage>
                                <StyledButtonContainer>
                                    <StyledButton type="submit"
                                                  disabled={formState.buttonDisabled}>Register</StyledButton>
                                </StyledButtonContainer>
                            </>
                        </form>
                        <StyledLink href={"/"}>Exit</StyledLink>

                    </>
                )
            }
        </>
    );
}

export default RegisterForm