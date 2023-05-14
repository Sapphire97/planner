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
        console.log(task.id)
    }
    return (
        <TaskRowContainer>
            <TaskRowContent>
                <RadioButton content={task.title} value={task.id} setValue={archiveTask} />
                <TaskRowDescriptionContainer>
                    <Icon name={"calendar"} color={"primary"} />
                    <TaskRowDescription>
                        {(task.dueDate).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
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