import {RadioButtonContainer, RadioInput, RadioLabel} from "./RadioButton-styled";

type RadioButtonProps<T> = {
    content: string,
    value: T,
    setValue: (value: T) => void
}
const RadioButton = ({content, value, setValue}: RadioButtonProps<any>) => {
    return (
        <RadioButtonContainer id={"radio"} data-testid={"radio-container"}>
            <RadioInput id={`radio-${value}`} type="radio" value={value} onChange={(e) => setValue(e.target.value)} />
            <RadioLabel htmlFor={`radio-${value}`}> {content} </RadioLabel>
        </RadioButtonContainer>
    )
}
export default RadioButton