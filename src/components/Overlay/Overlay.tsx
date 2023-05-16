import React from "react"
import {
    FloatingContainer,
    OverlayContainer,
    Shadow
} from "./Overlay-styled";
import {DialogContent} from "../../utils/helpers";

type OverlayProps = {
    name: string
    setOverlayName: (name: string) => void
    setNotificationMessage: (message: string) => void
}

const Overlay = ({name, setOverlayName, setNotificationMessage}: OverlayProps) => {
    const closeOverlay = () => {
        setOverlayName("")
    }
    if ( !name || name === "")
        return <></>

    return (
        <OverlayContainer id={"overlay-container"} data-testid={"overlay-container"}>
            <Shadow data-testid={"shadow"} onClick={closeOverlay} />
            <FloatingContainer>
                <DialogContent name={name} closeOverlay={closeOverlay} setNotificationMessage={setNotificationMessage} />
            </FloatingContainer>
        </OverlayContainer>
    )
}

export default Overlay