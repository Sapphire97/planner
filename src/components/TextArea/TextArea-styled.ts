import styled from "styled-components";

const TextAreaContainer = styled.div`
    font-family: "Open Sans",sans-serif;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: flex-start;
    box-sizing: border-box;
    margin-top: 1em;
`
const TextAreaLabel = styled.label`
    font-family: "Open Sans",sans-serif;
    font-size: .875rem;
    font-weight: 600;
    display: inline-block;
    vertical-align: baseline;
`
const TextAreaInput = styled.textarea`
    width: 100%;
    font-family: "Open Sans",sans-serif;
    font-size: .875rem;
    min-height: 40px;
    padding: 0;
    color: #031C2D;
    background-color: #ffffff;
    appearance: none;
    border: 1px solid #77A0B6;
    border-radius: 0px;
    order: 2;
    resize: vertical;
`

export { TextAreaContainer, TextAreaLabel, TextAreaInput }