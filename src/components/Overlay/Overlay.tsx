import {
    FloatingContainer,
    OverlayContainer,
    Shadow
} from "./Overlay-styled";
import {DialogContent} from "../../utils/helpers";
import React from "react";

type OverlayProps = {
    name: string
    setOverlayName: (name: string) => void
}

const Overlay = ({name, setOverlayName}: OverlayProps) => {
    const closeOverlay = () => {
        setOverlayName("")
    }
    if ( !name || name === "")
        return <></>

    return (
        <OverlayContainer id={"overlay-container"} data-testid={"overlay-container"}>
            <Shadow data-testid={"shadow"} onClick={closeOverlay} />
            <FloatingContainer>
                <DialogContent name={name} closeOverlay={closeOverlay} />
            </FloatingContainer>
        </OverlayContainer>
    )
}

export default Overlay