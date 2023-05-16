import styled from "styled-components";

const BodyContainer = styled.div`
    font-family: 'Open Sans', sans-serif !important;
    display: flex;
    flex-flow: column;
    align-items: left;
    padding: 10px 50px;
    margin-top: 60px;
`
const BodyHeader = styled.div`
    font-size: 1.25rem;
    display: flex;
    justify-content: space-between;
    margin: 0.6em 0;
`
const BodyContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.6em 0;
`
const BodyTitle = styled.h2`
    font-size: 1.5rem;
    margin: 0;
    text-align: left;
    text-transform: capitalize;
`

export { BodyContainer, BodyHeader, BodyTitle, BodyContent }