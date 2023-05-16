import React from "react";
import {RadioButtonContainer, RadioInput, RadioLabel} from "./RadioButton-styled";

type RadioButtonProps<T> = {
    content?: string,
    value: T,
    onClick: (value: T) => void
}
const RadioButton = ({content, value, onClick}: RadioButtonProps<any>) => {
    return (
        <RadioButtonContainer id={"radio"} data-testid={"radio-container"}>
            <RadioInput id={`radio-${value}`} type="radio" value={value} onClick={() => onClick(value)} />
            {content && <RadioLabel htmlFor={`radio-${value}`}> {content} </RadioLabel>}
        </RadioButtonContainer>
    )
}
export default RadioButton