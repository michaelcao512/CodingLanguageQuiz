import styled from "styled-components";

const ChoiceCard = styled.div`
    border: 1px solid #ddd;
    padding: 16px;
    margin: 8px 0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    
    &:hover {
        background-color: white;
        color: black;
    }
`;

const SelectedChoiceCard = styled(ChoiceCard)`
    background-color: white;
    color: black;
`;


export {ChoiceCard, SelectedChoiceCard};