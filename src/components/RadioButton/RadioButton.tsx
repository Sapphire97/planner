import React from "react";
import {RadioButtonContainer, RadioInput, RadioLabel} from "./RadioButton-styled";


type RadioButtonProps<T> = {
    content?: string,
    value: T,
    onClick: (value: T) => void
}

type HandleClickProps = {
    e: React.MouseEvent
    value: any
}
const RadioButton = ({content, value, onClick}: RadioButtonProps<any>) => {

    const handleClick = ({e, value} : HandleClickProps) => {
        e.stopPropagation()
        onClick(value)
    }
    return (
        <RadioButtonContainer id={"radio"} data-testid={"radio-container"}>
            <RadioInput id={`radio-${value}`} type="radio" value={value} onClick={(e) => handleClick({e, value})} />
            {content && <RadioLabel htmlFor={`radio-${value}`}> {content} </RadioLabel>}
        </RadioButtonContainer>
    )
}
export default RadioButton