import styled from "styled-components";

const TextContainer = styled.div`
    font-family: "Open Sans",sans-serif;
    display: grid;
    grid-template-columns: auto auto;
    margin-top: 1em;
`
const TextColumn = styled.div`
    font-family: "Open Sans",sans-serif;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
    margin-top: 1em;
`

const TextRow = styled.div`
    font-family: "Open Sans",sans-serif;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    box-sizing: border-box;
    margin-top: 1em;
`
const TextRowLabel = styled.label`
    font-family: "Open Sans",sans-serif;
    font-size: .875rem;
    font-weight: 600;
    display: inline-block;
    vertical-align: baseline;
    text-align: left;
    margin: .5em 0;
    width: 100%;
    border-bottom: 1px solid #dfe6eb;
`
const TextRowContent = styled.p`
    margin: 0;
    font-size: .875rem;
    margin: .5em 0;
    text-align: left;
    width: 100%;
    border-bottom: 1px solid #dfe6eb;
`

export { TextContainer, TextColumn, TextRow, TextRowLabel, TextRowContent }