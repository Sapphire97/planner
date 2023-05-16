import React, { useState } from "react";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import {
    DialogBody, DialogContainer,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    LinkButton
} from "../Overlay/Overlay-styled";
import Button from "../Button/Button";
import {Icon} from "../../utils/helpers";
import CloseDialog from "../Overlay/components/CloseDialog/CloseDialog";
import {useTaskContext} from "../../hooks/useTaskContext";
import {InputStyled, TextInputContainer} from "../Input/Input-styled";
import {DefaultTask} from "../../utils/defaults";
import {mapSubTasks} from "../../utils/dataHelpers";
import {DatesGroup, DatesContainer, DatesRowContent, DatesRowLabel} from "./EditTaskDialog-styled";

type EditTaskProps = {
    closeOverlay: () => void
    setNotificationMessage: (message: string) => void
}

const EditTaskDialog = ({closeOverlay, setNotificationMessage}: EditTaskProps) => {
    const {tasks, setTasks} = useTaskContext()
    const {selectedTask} = useTaskContext()
    const task = selectedTask ?? DefaultTask
    const [title, setTitle] = useState(task.title)
    const [description, setDescription] = useState(task.description)
    const [dueDate, setDueDate] = useState(new Date(task.dueDate))
    const [inputs, setInputs] = useState<InputState[]>(() => {
        const initInput = []
        for (let i = 0; i < task.subTasks.length; i++) {
            initInput.push({ id: i, value: task.subTasks[i].title })
        }
        return initInput
        }
    )

    const onSubmit = () => {
        try{
            const updatedTasks = tasks.map((currentTask) =>
                currentTask.id === task.id ?
                    {
                        ...currentTask,
                        description: description,
                        dueDate: dueDate,
                        subTasks: mapSubTasks(inputs),
                        title: title,
                        updatedOn: new Date()
                    } : currentTask
            )
            setTasks(updatedTasks)
            closeOverlay()
            setNotificationMessage(`Task ${task.title} was updated successfully`)
        }
        catch (e) {
            setNotificationMessage("Oops! Something went wrong. Please try again later.")
        }
    }

    const handleEditInput = (): void => {
        const newId = inputs.length ? inputs[inputs.length - 1].id + 1 : 1
        const newInput = { id: newId, value: "" }
        setInputs([...inputs, newInput])
    }

    const handleRemoveInput = (id: number): void => {
        const filteredInputs = inputs.filter((input) => input.id !== id)
        setInputs(filteredInputs)
    }

    const handleInputChange = (id: number, value: string): void => {
        const updatedInputs = inputs.map((input) =>
            input.id === id ? { ...input, value } : input
        )
        setInputs(updatedInputs)
    }

    return (
        <DialogContainer id={"dialog-container"}>
            <DialogHeader>
                <DialogTitle> Edit a task </DialogTitle>
                <CloseDialog closeDialog={closeOverlay} />
            </DialogHeader>
            <DialogBody>
                <DatesContainer>
                    <DatesGroup>
                        <DatesRowLabel htmlFor="created-on">Created on: </DatesRowLabel>
                        <DatesRowContent id="created-on">
                            {`${(new Date(task.createdOn)).toDateString()} ${(new Date(task.createdOn)).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`}
                        </DatesRowContent>
                    </DatesGroup>
                    <DatesGroup>
                        <DatesRowLabel htmlFor="updated-on">Last updated on:</DatesRowLabel>
                        <DatesRowContent id="updated-on">
                            {`${(new Date(task.updatedOn)).toDateString()} ${(new Date(task.updatedOn)).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`}
                        </DatesRowContent>
                    </DatesGroup>
                </DatesContainer>
                <Input label={"Title"} type={"text"} value={title} onChange={setTitle} />
                <TextArea label={"Description"} value={description} onChange={setDescription} />
                <Input label={"Due date"} type={"datetime-local"} value={dueDate} onChange={setDueDate} />
                <LinkButton onClick={handleEditInput}>
                    <Icon name={"add"} color={"#000000"} />
                    <span>Add a subtask</span>
                </LinkButton>
                {inputs.map((input) => (
                    <div key={input.id} style={{display: "flex", justifyContent: "space-between"}}>
                        <div style={{ flexGrow: 8}}>
                            <TextInputContainer>
                                <InputStyled type={"text"} value={input.value} id={`input-text-${input.id}`} onChange={(e) => handleInputChange(input.id, e.target.value)} />
                            </TextInputContainer>
                        </div>
                        <div style={{flexGrow: 1, paddingTop: "8px", cursor: "pointer"}} onClick={() => handleRemoveInput(input.id)}>
                            <Icon name={"close"} color={"#8C9BA5"} />
                        </div>
                    </div>
                ))}
            </DialogBody>
            <DialogFooter>
                <Button variant={"primary"} content={"Save"} onBtnPress={onSubmit} />
            </DialogFooter>
        </DialogContainer>
    )
}

export default EditTaskDialog