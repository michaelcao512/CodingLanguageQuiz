"use client"
import styled, { createGlobalStyle } from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.cdnfonts.com/css/satoshi');

    body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: white;
    }
`;

// STYLED TEXT
export const StyledH1 = styled.h1`
  align-items: center;
  font-family: 'Satoshi', sans-serif;
  font-weight: 900;
  padding-right: 10px;
  padding-left: 10px;
  color: white;
`;
export const StyledLabel = styled.label`
  font-family: 'Satoshi', sans-serif;
  display: flex;
  margin: auto;
  color: white;
`;
export const StyledP = styled.p`
  padding-top: 10px;
  font-family: 'Satoshi', sans-serif;
  color: #ffffff;
  font-weight: lighter;
`;

// BUTTONS
export const StyledButton = styled.button`
    padding: 10px 45px;
    border-radius: 31px;
    background: linear-gradient(to right, #5B4EF0, #67B6FF);
    color: white;
    font-family: 'Satoshi', sans-serif;
    font-weight: normal;
    display: flex;
    font-size: 15pt;
    border: none;
    margin: auto 5px;
    cursor: pointer;
    outline: none;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;

    &:enabled:hover {
        background: linear-gradient(to right, #67B6FF, #5B4EF0);
        scale: 1.05;
    }

    &:disabled {
        background: #c4c4c4;
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
export const StyledLink = styled(Link)`
  padding: 1rem 0;
  font-family: 'Satoshi', sans-serif;
  color: #86d0fd;
  font-weight: lighter;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// GENERAL CONTAINER
export const LandingDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  align-items: center;
  padding: 20px 30px 50px;
  //background: linear-gradient(0deg, rgb(137, 135, 161), rgb(111, 122, 169));
  background: rgba(255, 255, 255, 0.11);
  //border: 3px solid rgba(255, 255, 255, 0.16);
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.14);
`;

// REGISTER / LOGIN
export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  align-content: center;
  padding-left: 10px;
  padding-right: 10px;
`;
export const StyledInput = styled.input`
  padding: 5px;
  border-radius: 5px;
  border-color: #c4c4c4;
  border-width: thin;
  display: flex;
  margin: auto;
  margin-bottom: 20px;
`;
export const ErrorMessage = styled.span`
  color: #942c2c;
  text-transform: uppercase;
`;

// HOME PAGE
export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;