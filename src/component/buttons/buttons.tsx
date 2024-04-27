"use client"
import {StyledButton} from "@/Styles/GeneralStyles";
import { useRouter} from "next/navigation";
import {router} from "next/client";


export function ToLoginButton(){
    const router = useRouter();
    return (
        <StyledButton onClick={()=> router.push("/login") }> Login </StyledButton>
    )
}

export function ToRegisterButton(){
    const router = useRouter();
    return (
        <StyledButton onClick={()=>router.push("/register") }> Register </StyledButton>
    )
}


export function ToButton(params: {destination: string, text: string}){
    const router = useRouter();
    return (
        <StyledButton onClick={()=>router.push(params.destination)}>{params.text}</StyledButton>
    )
}