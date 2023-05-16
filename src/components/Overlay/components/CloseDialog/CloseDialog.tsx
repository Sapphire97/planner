import React from "react"
import {Icon} from "../../../../utils/helpers";
import {CloseDialogContainer} from "./CloseDialog-styled";

type CloseDialogProps = {
    closeDialog: () => void
}

const CloseDialog = ({closeDialog}: CloseDialogProps) => {
    return (
        <CloseDialogContainer role={"button"} onClick={closeDialog}>
            <Icon name={"close"} color={"#8C9BA5"} />
        </CloseDialogContainer>
    )
}

export default CloseDialog