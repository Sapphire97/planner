import React, {useState} from "react"
import Input from "../Input/Input"
import TextArea from "../TextArea/TextArea"
import {
    DialogBody, DialogContainer,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    LinkButton
} from "../Overlay/Overlay-styled"
import Button from "../Button/Button"
import {Icon} from "../../utils/helpers"
import CloseDialog from "../Overlay/components/CloseDialog/CloseDialog"
import {useTaskContext} from "../../hooks/useTaskContext"
import {InputStyled, TextInputContainer} from "../Input/Input-styled"
import {mapSubTasks} from "../../utils/dataHelpers"

type AddTaskProps = {
    closeOverlay: () => void
    setNotificationMessage: (message: string) => void
}

const AddTaskDialog = ({closeOverlay, setNotificationMessage}: AddTaskProps) => {
    const {tasks, setTasks} = useTaskContext()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [dueDate, setDueDate] = useState(new Date())
    const [inputs, setInputs] = useState<InputState[]>([])

    const onSubmit = () => {
        try {
            const newTask: Task = {
                createdOn: new Date(),
                description: description,
                dueDate: dueDate,
                id: 0,
                subTasks: mapSubTasks(inputs),
                title: title,
                updatedOn: new Date()
            }
            const highestId = tasks.length < 1 ? 0 :
                tasks.reduce((prev, current) => (prev.id > current.id ? prev : current)).id
            setTasks([...tasks,
                {
                    ...newTask,
                    id: highestId + 1,
                    createdOn: new Date(),
                    updatedOn: new Date()
                }
            ])
            closeOverlay()
            setNotificationMessage(`Task ${newTask.title} was added successfully`)
        }
        catch (e) {
            setNotificationMessage("Oops! Something went wrong. Please try again later.")
        }
    }

    const handleAddInput = (): void => {
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
        <DialogContainer>
            <DialogHeader>
                <DialogTitle> Add a task </DialogTitle>
                <CloseDialog closeDialog={closeOverlay} />
            </DialogHeader>
            <DialogBody>
                <Input label={"Title"} type={"text"} onChange={setTitle} />
                <TextArea label={"Description"} onChange={setDescription} />
                <Input label={"Due date"} type={"datetime-local"} onChange={setDueDate} />
                <LinkButton onClick={handleAddInput}>
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

export default AddTaskDialog