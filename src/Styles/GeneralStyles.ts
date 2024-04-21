"use client"
import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

`;


export const StyledInput = styled.input`
  padding: 5px;
  margin-left: 10px;
  margin-right: 20px;
  border-radius: 5px;
  border-color: #c4c4c4;
  border-width: thin;
  text-shadow: black;
`

export const StyledH1 = styled.h1`
  align-items: center;
  font-family: Satoshi, sans-serif;
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
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  box-shadow: black;
`

export const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`

export const StyledLabel = styled.label`
  font-family: 'Poppins', sans-serif;
`

export const LandingDiv=styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-content: center;
  align-items: center;
`

export const ErrorMessage = styled.span`
    color: red;
    text-transform: uppercase;
`;
