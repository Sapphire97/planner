import React from "react";
import {TextAreaContainer, TextAreaInput, TextAreaLabel} from "./TextArea-styled";

type TextAreaProps<T> = {
    label: string,
    value?: T,
    onChange: (value: T) => void
}

const TextArea = ({label, value, onChange}: TextAreaProps<any>) => {
    return (
        <TextAreaContainer>
            <TextAreaLabel htmlFor={`input-text-area`} >{label}</TextAreaLabel>
            <TextAreaInput value={value} onChange={(e) => onChange(e.target.value)} id={`input-text-area`} />
        </TextAreaContainer>
    )
}

export default TextArea