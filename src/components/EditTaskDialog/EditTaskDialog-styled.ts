import styled from "styled-components";

const DatesContainer = styled.div`
    font-family: "Open Sans",sans-serif;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 0.5em;
    opacity: 0.6;
`
const DatesGroup = styled.div`
    font-family: "Open Sans",sans-serif;
    width: 100%;
    display: flex;
    align-items: flex-start;
    box-sizing: border-box;
    margin-top: 1em;
`
const DatesRowLabel = styled.label`
    font-family: "Open Sans",sans-serif;
    font-size: .675rem;
    font-weight: 600;
    display: inline-block;
    vertical-align: baseline;
    text-align: left;
    margin-right: .3em;
`
const DatesRowContent = styled.div`
    margin: 0;
    font-size: .675rem;
    text-align: left;
`

export { DatesContainer, DatesGroup, DatesRowLabel, DatesRowContent }