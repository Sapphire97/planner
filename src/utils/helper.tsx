import AddIcon from "../components/Icons/AddIcon";
import {dangerColor, primaryColor, secondaryColor, successColor, warningColor} from "./globals";

type IconProps = {
    name: string,
    color: string
}
const Icon = ({name, color}: IconProps) => {
    switch (name) {
        case "add":
            return <AddIcon color={color} />
        default:
            return <></>
    }
}

const getColorValue = (variant: string) => {
    switch (variant) {
        case "primary":
            return {
                backgroundColor: primaryColor,
                color: "#FFFFFF"
            }
        case "secondary":
            return {
                backgroundColor: secondaryColor,
                color: "#FFFFFF"
            }
        case "danger":
            return {
                backgroundColor: dangerColor,
                color: "#FFFFFF"
            }
        case "success":
            return {
                backgroundColor: successColor,
                color: "#FFFFFF"
            }
        case "warning":
            return {
                backgroundColor: warningColor,
                color: "#000000"
            }
        default:
            return {
                backgroundColor: "#FFFFFF",
                color: "#000000"
            }
    }
}

export { Icon, getColorValue }