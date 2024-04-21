"use client"
import styled, {createGlobalStyle} from "styled-components";

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

export const StyledH1 = styled.h1`
  align-items: center;
  font-family: 'Satoshi', sans-serif;
  font-weight: bold;
  padding-right: 10px;
  padding-left: 10px;
  
`

export const LoginDiv=styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-content: center;
  align-items: center;
    `

export const StyledButton = styled.button`
  padding: 5px 20px 5px 20px;
  border-radius: 4px;
  border-width: thin;
  background-color: black;
  color: white;
  font-family: 'Satoshi', sans-serif;
  font-weight: bold;
  box-shadow: black;
  display: flex;
  margin: auto;
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

export const LandingDiv=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const StyledContainer=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 30px 50px;
  background: linear-gradient(0deg, #d0c6ff, #ffccd5);
  border: 3px solid #ffffff;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.31);
`

export const ErrorMessage = styled.span`
    color: red;
    text-transform: uppercase;
`;

export const StyledLink=styled.a`
  padding-top: 20px;
  font-family: 'Satoshi', sans-serif;
  color: #4e3280;
  font-weight: lighter;
`;