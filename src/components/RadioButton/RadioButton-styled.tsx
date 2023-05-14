import styled from "styled-components";

const RadioButtonContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: .875rem;
    font-family: "Open Sans",sans-serif;
    cursor: pointer;
`

const RadioInput = styled.input`
margin: 2px 0.4em 0 0;
`

const RadioLabel = styled.label`
    font-size: .875rem;
`

export { RadioButtonContainer, RadioInput, RadioLabel }