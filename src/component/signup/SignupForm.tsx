"use client"
import React, {useContext, useEffect, useState} from "react"

import {redirect} from "next/navigation";

import {useFormState} from "react-dom";
import {validateFormAction} from "@/lib/validation"
import {StyledButton, StyledInput, ErrorMessage, InputDiv, StyledLabel, StyledLink} from "@/Styles/GeneralStyles";
import {QuizFlowContext} from "@/lib/context";
import {createUserChoices} from "@/lib/database";
import {User} from "@prisma/client";


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

    // after user registered redirect to login page
    const [userRegistered, setUserRegistered] = useState(false);
    useEffect(() => {
        if (userRegistered) {
            // creates associated UserChoices objects for user
            createUserChoices(context.userId, context.userChoices).then(r => console.log(r));
            redirect('/login');
        }
    }, [userRegistered]);

    // input handling for form validation
    async function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const {name} = event.target;
        setInteractedFields({...interactedFields, [name]: true});

        const FD = new FormData(event.target.form as HTMLFormElement);
        formAction(FD);
    }

    // submit form
    async function handleSubmit() {
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
            return;
        }



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
        }
    }

    return (
        <form action={formAction} onSubmit={handleSubmit}>
            <ErrorMessage>{error}</ErrorMessage>
            <div>
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
                    {interactedFields.password && <ErrorMessage>  {formState.passwordError}</ErrorMessage>}
                    <StyledInput type="password" name="password" onChange={handleChange}/>
                </InputDiv>
                <InputDiv>
                    <StyledLabel>Biography</StyledLabel>
                    <StyledInput type="text" name="biography" onChange={handleChange}/>
                </InputDiv>
                <div>
                    <StyledButton type="submit" disabled={formState.buttonDisabled}>Register</StyledButton>
                </div>

            </div>
        </form>
    );

}

export default RegisterForm