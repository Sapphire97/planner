import styled from "styled-components";
import {primaryColor} from "../../utils/globals";

const TaskRowContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.4em 0;
    border-bottom: 1px solid #dfe6eb;
`
const TaskRowContent = styled.div`
    flex-grow: 8;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
const TaskRowDescriptionContainer = styled.div`
    align-items: left;
    text-align: left;
    margin-left: 18px;
`
const TaskRowDescription = styled.span`
    margin-left: 0.2em;
    font-size: .675rem;
    color: ${primaryColor};
`
const TaskRowActions = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`
const TaskRowActionsLabel = styled.div`
    font-size: .775rem;
    color: ${primaryColor};
    margin-right: 0.3em;
`

export { TaskRowContainer, TaskRowContent, TaskRowDescriptionContainer, TaskRowDescription, TaskRowActions, TaskRowActionsLabel }