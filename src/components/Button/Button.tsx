import {ButtonContainer, ButtonContent, ButtonIconContainer} from "./Button-styled";
import {getColorValue, Icon} from "../../utils/helper";

type ButtonProps = {
    variant: "primary" | "secondary" | "danger" | "success" | "warning"
    content: string,
    disabled?: boolean,
    icon?: string,
    onBtnPress?:  () => void
}

const Button = ({ variant, content, disabled, icon, onBtnPress }: ButtonProps) => {
    const {backgroundColor, color} = getColorValue(variant)
    console.log(disabled, typeof disabled)
    return (
        <ButtonContainer
            onClick={onBtnPress}
            style={{ backgroundColor, color }}
            disabled={disabled}
        >
            <ButtonContent>{content}</ButtonContent>
            {icon && <ButtonIconContainer data-testid={"icon-container"}> <Icon name={icon} color={color} /> </ButtonIconContainer>}
        </ButtonContainer>
    )
}
export default Button