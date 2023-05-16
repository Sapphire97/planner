import React from "react";
import {InputStyled, TextInputContainer, TextInputLabel} from "./Input-styled";

type InputProps<T> = {
    type: string,
    label?: string,
    value?: T,
    onChange: (value: T) => void
}

const Input = ({ type, label, value, onChange }: InputProps<any>) => {
    return (
        <TextInputContainer>
            {label && <TextInputLabel htmlFor={`input-${type}`}>{label}</TextInputLabel>}
            <InputStyled type={type} value={value} id={`input-${type}`} onChange={(e) => onChange(e.target.value)} />
        </TextInputContainer>
    )
}

export default Input