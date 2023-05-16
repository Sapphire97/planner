import {
    DialogBody, DialogContainer,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "../Overlay/Overlay-styled";
import Button from "../Button/Button";
import React from "react";
import CloseDialog from "../Overlay/components/CloseDialog/CloseDialog";
import {useTaskContext} from "../../hooks/useTaskContext";
import {DefaultTask} from "../../utils/defaults";
import {TextColumn, TextContainer, TextRow, TextRowContent, TextRowLabel} from "./ViewTaskDialog-styled";
import {TextInputLabel} from "../Input/Input-styled";

type ViewTaskProps = {
    closeOverlay: () => void
}

const ViewTaskDialog = ({closeOverlay}: ViewTaskProps) => {
    const {tasks, setTasks} = useTaskContext()
    const {selectedTask} = useTaskContext()
    const task = selectedTask ?? DefaultTask

    const markAsDone = (id: number) => {
        const updatedTasks = tasks.map((currentTask) =>
            currentTask.id === task.id ?
                {
                    ...currentTask,
                    subTasks: (task.subTasks).map((subTask): SubTask => (
                        subTask.id === id ?
                            { ...subTask, isDone: !subTask.isDone }
                            : subTask
                    )),
                    updatedOn: new Date()
                } : currentTask
        )
        setTasks(updatedTasks)
    }

    return (
        <DialogContainer>
            <DialogHeader>
                <DialogTitle> View task (ID - {task.id})</DialogTitle>
                <CloseDialog closeDialog={closeOverlay} />
            </DialogHeader>
            <DialogBody>
                <TextContainer>
                    <TextColumn>
                        <TextRowLabel htmlFor="input-title">Title</TextRowLabel>
                        <TextRowLabel htmlFor="input-description">Description</TextRowLabel>
                        <TextRowLabel htmlFor="input-dueDate">Due Date</TextRowLabel>
                    </TextColumn>
                    <TextColumn>
                        <TextRowContent id="input-title"> {task.title} </TextRowContent>
                        <TextRowContent id="input-description"> {task.description} </TextRowContent>
                        <TextRowContent id="input-dueDate"> {(new Date(task.dueDate)).toDateString()} </TextRowContent>
                    </TextColumn>
                </TextContainer>
                {task.subTasks && task.subTasks.length > 0 && <span style={{textAlign: "left", marginTop: "1em"}}>Checklist</span>}
                {task.subTasks.map((subTask) => (
                    <TextRow key={`subtask-${subTask.id}`} style={{textDecoration: subTask.isDone ? "line-through" : "none"}}>
                        <input type="checkbox" value={subTask.id} onChange={() => markAsDone(subTask.id)} disabled={task.isArchived}/>
                        <TextInputLabel htmlFor={`input-${subTask.id}`}>{subTask.title}</TextInputLabel>
                    </TextRow>
                ))}
            </DialogBody>
            <DialogFooter>
                <Button variant={"primary"} content={"close"} onBtnPress={closeOverlay} />
            </DialogFooter>
        </DialogContainer>
    )
}

export default ViewTaskDialog