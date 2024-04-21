import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.cdnfonts.com/css/satoshi');
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
  margin-top: 10px;
`

export const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
  align-content: center;
`


export const StyledLabel=styled.label`
  font-family: 'Satoshi', sans-serif;
  font-weight: normal;
`