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
