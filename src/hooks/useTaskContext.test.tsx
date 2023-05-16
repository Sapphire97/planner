import { render } from "@testing-library/react"
import { TaskProvider } from "./useTaskContext"

describe("TaskProvider", () => {
    const tasks: Task[] = [
        { id: 1, title: "Task 1", description: "Description 1", dueDate: new Date(), createdOn: new Date(), updatedOn: new Date(), subTasks: [] },
        { id: 2, title: "Task 2", description: "Description 2", dueDate: new Date(), createdOn: new Date(), updatedOn: new Date(), subTasks: [] },
    ]
    const activeTab = "All"

    it("should render the TaskProvider component with the correct value for the context", () => {
        const setTasks = jest.fn()
        const setActiveTab = jest.fn()

        const { getByText } = render(
            <TaskProvider tasks={tasks} setTasks={setTasks} activeTab={activeTab} setActiveTab={setActiveTab}>
                <p>{`Tasks: ${tasks.map((task) => task.title).join(", ")}`}</p>
            </TaskProvider>
        )

        expect(getByText("Tasks: Task 1, Task 2")).toBeInTheDocument()
        expect(setTasks).not.toHaveBeenCalled()
        expect(setActiveTab).not.toHaveBeenCalled()
    })
})
