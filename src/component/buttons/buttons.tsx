"use client"
import { useRouter} from "next/navigation";
import {router} from "next/client";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledButton = styled(motion.button)`
  padding: 10px 45px;
  border-radius: 31px;
  background: linear-gradient(to right, #5B4EF0, #67B6FF);
  color: white;
  font-family: 'Satoshi', sans-serif;
  font-weight: normal;
  display: flex;
  margin: auto;
  font-size: 15pt;
  border: none;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
  outline: none;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #67B6FF, #5B4EF0);
  }

  &:active {
    transform: scale(0.95);
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: rgba(255, 255, 255, 0.18);
    transition: all 0.3s ease;
    border-radius: 50%;
    z-index: 0;
    transform: translate(-50%, -50%) scale(0);
  }

  &:active:after {
    width: 0;
    height: 0;
    opacity: 0;
    transform: translate(-50%, -50%) scale(3);
  }
`;

export function ToLoginButton(){
    const router = useRouter();
    return (
        <StyledButton whileTap={{ scale: 0.75 }} onClick={()=> router.push("/login") }> Login </StyledButton>
    )
}

export function ToRegisterButton(){
    const router = useRouter();
    return (
        <StyledButton whileTap={{ scale: 0.75 }} onClick={()=>router.push("/register") }> Register </StyledButton>
    )
}


export function ToButton(params: {destination: string, text: string}){
    const router = useRouter();
    return (
        <StyledButton whileTap={{ scale: 0.75 }} onClick={()=>router.push(params.destination)}>{params.text}</StyledButton>
    )
}
