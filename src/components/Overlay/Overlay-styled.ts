import styled from "styled-components";

const OverlayContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
    display: flex;
    alignItems: center;
    justifyContent: center;
    z-index: 1040;
`
const Shadow = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    width: 100% !important;
    height: 100% !important;
    background: #000000;
    opacity: 0.7;
    z-index: 1040;
`
const FloatingContainer = styled.div`
    min-width: 400px;
    max-width: 60%;
    min-height: 200px;
    max-height: 60%;
    margin: auto;
    z-index: 1050;
`
const DialogContainer = styled.div`
    margin: 0;
    background: #FFFFFF;
`
const DialogHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 .5em 0 1.2em;
`
const DialogTitle = styled.div`
    font-size: 1rem;
    font-weight: 600;
    padding-top: .5em;
`
const DialogIconContainer = styled.span`
    cursor: pointer;
`
const DialogBody = styled.div`
    padding: 0 1em .5em 1.2em;
    display: flex;
    flex-direction: column;
`
const LinkButton = styled.div`
    cursor: pointer;
    margin-top: 1em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: .875rem;
`
const DialogFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    background: #DEE7ED;
    padding: 1.2em;
`

export { OverlayContainer, Shadow, FloatingContainer, DialogContainer, DialogTitle, DialogHeader,
    DialogIconContainer, DialogBody, LinkButton, DialogFooter }