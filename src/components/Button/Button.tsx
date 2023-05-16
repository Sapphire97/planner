import {ButtonContainer, ButtonContent, ButtonIconContainer} from "./Button-styled";
import {getColorValue, Icon} from "../../utils/helpers";

type ButtonProps = {
    variant: "primary" | "secondary" | "danger" | "success" | "warning"
    content: string,
    disabled?: boolean,
    icon?: string,
    onBtnPress?:  () => void
}

const Button = ({ variant, content, disabled, icon, onBtnPress }: ButtonProps) => {
    const {backgroundColor, color} = getColorValue(variant)
    return (
        <ButtonContainer
            role={"button"}
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