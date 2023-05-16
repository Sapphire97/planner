import React from "react"
import { render } from "@testing-library/react"
import { useTaskContext } from "../../hooks/useTaskContext"
import ViewTaskDialog from "./ViewTaskDialog"
import '@testing-library/jest-dom/extend-expect';

jest.mock("../../hooks/useTaskContext")

const mockedUseTaskContext = useTaskContext as jest.MockedFunction<typeof useTaskContext>;

describe("ViewTaskDialog component", () => {
    const closeOverlayMock = jest.fn()
    const task: Task = {
        createdOn: new Date(),
        updatedOn: new Date(),
        id: 1,
        title: "Test task",
        description: "This is a test task",
        dueDate: new Date("2023-05-20"),
        subTasks: [
            {
                id: 1,
                title: "Test subtask 1",
                isDone: false,
            },
            {
                id: 2,
                title: "Test subtask 2",
                isDone: true,
            },
        ]
    }

    beforeEach(() => {
        mockedUseTaskContext.mockReturnValue({
            activeTab: "",
            setActiveTab: jest.fn(),
            setSelectedTask: jest.fn(),
            tasks: [],
            setTasks: jest.fn(),
            selectedTask: task
        })
    })

    afterEach(() => {
        jest.resetAllMocks()
    })

    it("should render the component with task details", () => {
        const { getByText } = render(
            <ViewTaskDialog closeOverlay={closeOverlayMock} />
        )

        expect(getByText(`View task (ID - ${task.id})`)).toBeInTheDocument()
        expect(getByText("Title")).toBeInTheDocument()
        expect(getByText("Description")).toBeInTheDocument()
        expect(getByText("Due Date")).toBeInTheDocument()
        expect(getByText(task.title)).toBeInTheDocument()
        expect(getByText(task.description)).toBeInTheDocument()
        expect(
            getByText(new Date(task.dueDate).toDateString())
        ).toBeInTheDocument()
        expect(getByText("Test subtask 1")).toBeInTheDocument()
        expect(getByText("Test subtask 2")).toBeInTheDocument()
    })
})
