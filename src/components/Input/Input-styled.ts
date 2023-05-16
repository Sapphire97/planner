import styled from "styled-components";

const TextInputContainer = styled.div`
    font-family: "Open Sans",sans-serif;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: flex-start;
    box-sizing: border-box;
    margin-top: 1em;
`
const TextInputLabel = styled.label`
    font-family: "Open Sans",sans-serif;
    font-size: .875rem;
    font-weight: 600;
    display: inline-block;
    vertical-align: baseline;
`
const InputStyled = styled.input`
    font-family: "Open Sans",sans-serif;
    font-size: .875rem;
    display: block;
    width: 100%;
    height: 30px;
    min-width: 4rem;
    color: #031C2D;
    appearance: none;
    background-color: #ffffff;
    order: 2;
    border: 1px solid #77A0B6;
    border-radius: 0px;
    padding: 0;
`
export { TextInputContainer, TextInputLabel, InputStyled }