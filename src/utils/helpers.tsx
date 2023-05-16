import AddIcon from "../components/Icons/AddIcon";
import {dangerColor, primaryColor, secondaryColor, successColor, warningColor} from "./globals";
import HomeIcon from "../components/Icons/HomeIcon";
import CalendarIcon from "../components/Icons/CalendarIcon";
import EditIcon from "../components/Icons/EditIcon";
import AddTaskDialog from "../components/AddTaskDialog/AddTaskDialog";
import CloseIcon from "../components/Icons/CloseIcon";
import EditTaskDialog from "../components/EditTaskDialog/EditTaskDialog";

const Icon = ({name, color}: IconProps) => {
    switch (name) {
        case "add":
            return <AddIcon color={getColorValueByName(color)} />
        case "home":
            return <HomeIcon color={getColorValueByName(color)} />
        case "calendar":
            return <CalendarIcon color={getColorValueByName(color)} />
        case "edit":
            return <EditIcon color={getColorValueByName(color)}/>
        case "close":
            return <CloseIcon color={getColorValueByName(color)} />
        default:
            return <></>
    }
}

const getColorValueByName = (name: string) => {
    switch (name) {
        case "primary":
            return primaryColor
        case "secondary":
            return secondaryColor
        case "danger":
            return dangerColor
        case "success":
            return successColor
        case "warning":
            return warningColor
        default:
            return name
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
type DialogProps = {
    name: string
    closeOverlay: () => void
}
const DialogContent = ({name, closeOverlay}: DialogProps) => {
    switch (name) {
        case "addTask":
            return <AddTaskDialog closeOverlay={closeOverlay} />
        case "editTask":
            return <EditTaskDialog closeOverlay={closeOverlay} />
        default:
            return <></>
    }
}

export { Icon, getColorValue, DialogContent }