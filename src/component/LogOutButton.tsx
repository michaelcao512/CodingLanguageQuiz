"use client"
import {signOut} from "next-auth/react";
import {StyledButton} from "@/Styles/GeneralStyles";

export default function LogOutButton() {
    return (
        <StyledButton onClick={ () => signOut({callbackUrl: "/"}) } > Log Out</StyledButton>
    )
}
