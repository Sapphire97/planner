import React from "react";
import {
    TaskRowContainer,
    TaskRowContent,
    TaskRowDescription,
    TaskRowDescriptionContainer,
    TaskRowActions,
    TaskRowActionsLabel
} from "./TaskRow-styled";
import RadioButton from "../RadioButton/RadioButton";
import {Icon} from "../../utils/helpers";
import {useTaskContext} from "../../hooks/useTaskContext";
import {dangerColor, primaryColor, secondaryColor, successColor} from "../../utils/globals";

type TaskRowProps = {
    task: Task
    setOverlayName: (name: string) => void
}

const TaskRow = ({ task, setOverlayName } : TaskRowProps) => {
    const { tasks, setTasks, setSelectedTask } = useTaskContext()
    let dateString = (new Date(task.createdOn)).toDateString()
    const taskState = task.isArchived ? "archived" :
        (new Date()).toDateString() === dateString ? "today" :
            new Date(task.dueDate) < new Date() ? "overdue"
                : "upcoming"
    dateString = taskState === "today" ? "" : `${dateString} `
    dateString += (new Date(task.dueDate)).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    const stateColor = taskState === "today" ? primaryColor
        : taskState === "overdue" ? dangerColor
            : taskState === "upcoming" ? successColor
                : secondaryColor
    const archiveTask = () => {
        const updatedTasks = tasks.map((selectedTask) =>
            selectedTask.id === task.id ?
                {
                    ...selectedTask,
                    isArchived: true,
                    updatedOn: new Date()
                } : selectedTask
        )
        setTasks(updatedTasks)
    }
    const editTask = () => {
        if(task.isArchived) return
        setSelectedTask(task)
        setOverlayName("editTask")
    }
    const viewTask = () => {
        setSelectedTask(task)
        setOverlayName("viewTask")
    }
    return (
        <TaskRowContainer data-testid={"task-row"}>
            <TaskRowContent onClick={viewTask}>
                <RadioButton content={task.title} value={task.id} onClick={archiveTask} />
                <TaskRowDescriptionContainer>
                    <Icon name={"calendar"} color={stateColor} />
                    <TaskRowDescription
                        style={{color: stateColor}}
                    >
                        {dateString}
                    </TaskRowDescription>
                </TaskRowDescriptionContainer>
            </TaskRowContent>
            <TaskRowActions style={{display: task.isArchived ? "none": "flex"}} onClick={editTask}>
                <TaskRowActionsLabel>Edit</TaskRowActionsLabel>
                <Icon name={"edit"} color={"primary"} />
            </TaskRowActions>
        </TaskRowContainer>
    )
}
export default TaskRow