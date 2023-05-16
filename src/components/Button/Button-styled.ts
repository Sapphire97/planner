import styled from "styled-components";

const ButtonContainer = styled.button`
    display: inline-block;
    line-height: initial;
    border-width: 2px;
    border-style: solid;
    border-color: transparent;
    cursor: pointer;
    font-size: .875rem;
    font-weight: 500;
    height: 2.5rem;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    transition-duration: 50ms;
    transition-timing-function: ease-in;
    white-space: nowrap;
    box-sizing: border-box;
    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
}
`

const ButtonContent = styled.span`
    display: inline-block;
    margin-right: 0.2em;
    vertical-align: middle;
`
const ButtonIconContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
`

export { ButtonContainer, ButtonContent, ButtonIconContainer }