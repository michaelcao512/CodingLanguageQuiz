"use client"
import {signOut} from "next-auth/react";
import style from "styled-components"

const Button = style.button`
    background-color: #c4c4c4;
    color: black;
    border-radius: 20px;
    font-family: 'Satoshi', sans-serif;
    font-weight: normal;
    font-size: 14px;
    border: none;
    &:hover {
        background:  linear-gradient(to right, #5B4EF0, #67B6FF);
        color: white
    } 
`;

export default function LogOutButton() {
    return (
        <Button onClick={ () => signOut({callbackUrl: "/"}) } > Log Out</Button>
    )
}

