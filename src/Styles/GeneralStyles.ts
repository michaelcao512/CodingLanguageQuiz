"use client"
import styled, {createGlobalStyle} from "styled-components";
import Link from "next/link";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.cdnfonts.com/css/satoshi');
`;


export const StyledInput = styled.input`
    padding: 5px;
    //margin-left: 10px;
    //margin-right: 20px;
    border-radius: 5px;
    border-color: #c4c4c4;
    border-width: thin;
    text-shadow: black;
    display: flex;
    margin: auto;
    margin-bottom: 20px;
`
export const StyledCustomLink = styled.a`
  font-family: 'Satoshi', sans-serif;
  color: #4e3280;
  text-decoration: none; 
  cursor: pointer;
`;

export const StyledH1 = styled.h1`
    align-items: center;
    font-family: 'Satoshi', sans-serif;
    font-weight: 900;
    padding-right: 10px;
    padding-left: 10px;

`

export const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    align-content: center;
    align-items: center;
`

export const StyledButton = styled.button`
  padding: 10px 45px;
  border-radius: 31px;
  //border-width: thin;
  background: linear-gradient(to right, #5B4EF0, #67B6FF);
  color: white;
  font-family: 'Satoshi', sans-serif;
  font-weight: normal;
  //box-shadow: black;
  display: flex;
  margin: auto;
  font-size: 15pt;
  border: none;
  margin-left: 5px;
  margin-right: 5px;
  border: none;
`

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
    align-content: center;
    padding-left: 10px;
    padding-right: 10px;
`

export const StyledLabel = styled.label`
    font-family: 'Satoshi', sans-serif;
    display: flex;
    margin: auto;
`

export const LandingDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 30px 50px;
  background: linear-gradient(0deg, #fafafa, #ffffff);
  border: 3px solid #ffffff;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.14);
`

export const ErrorMessage = styled.span`
  color: #942c2c;
  text-transform: uppercase;
`;

export const StyledLink = styled(Link)`
    padding-top: 20px;
    font-family: 'Satoshi', sans-serif;
    color: #4e3280;
    //font-weight: lighter;
`;

export const StyledP=styled.p`
  padding-top: 10px;
  font-family: 'Satoshi', sans-serif;
  color: #4e3280;
  font-weight: lighter;


`;