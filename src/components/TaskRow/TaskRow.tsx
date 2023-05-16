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

type TaskRowProps = {
    task: Task
}

const TaskRow = ({ task } : TaskRowProps) => {
    const archiveTask = () => {
        console.log("archive task clicked")
    }
    return (
        <TaskRowContainer data-testid={"task-row"}>
            <TaskRowContent>
                <RadioButton content={task.title} value={task.id} onClick={archiveTask} />
                <TaskRowDescriptionContainer>
                    <Icon name={"calendar"} color={"primary"} />
                    <TaskRowDescription>
                        {(new Date(task.dueDate)).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </TaskRowDescription>
                </TaskRowDescriptionContainer>
            </TaskRowContent>
            <TaskRowActions>
                <TaskRowActionsLabel>Edit</TaskRowActionsLabel>
                <Icon name={"edit"} color={"primary"} />
            </TaskRowActions>
        </TaskRowContainer>
    )
}
export default TaskRow