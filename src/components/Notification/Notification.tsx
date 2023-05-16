import {NotificationContainer} from "./Notification-styled"
import {getColorValueByName} from "../../utils/helpers"
import React, {useEffect} from "react"

type NotificationProps = {
    notificationMessage: string
    setNotificationMessage: (message: string) => void
}

const Notification = ({notificationMessage, setNotificationMessage}: NotificationProps) => {
    const getRGBAValue = (rgbColor: string) => {
        const rgbValues = rgbColor.slice(4, -1)
        const rgbArray = rgbValues.split(",").map(value => parseInt(value.trim(), 10))
        const [r, g, b] = rgbArray
        return `rgba(${r}, ${g}, ${b}, 0.2)`
    }
    const rgbColor = getColorValueByName("primary")
    const backgroundColor = getRGBAValue(rgbColor)

    useEffect(() => {
        let timer: NodeJS.Timeout
        if (notificationMessage.length > 0) {
            timer = setTimeout(() => {
                setNotificationMessage("")
            }, 5000)
        }

        return () => clearTimeout(timer)
    }, [notificationMessage])

    if (notificationMessage.length < 1)
        return <></>

    return (
        <NotificationContainer
            data-testid={"notification-container"}
            style={{backgroundColor}}
        >
            <span style={{opacity: 1}}>{notificationMessage}</span>
        </NotificationContainer>
    )
}

export default Notification