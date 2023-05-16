import React from "react"
import { render } from "@testing-library/react"
import TaskRow from "./TaskRow"

const mockTask: Task = {
    id: 1,
    title: "Do laundry",
    dueDate: new Date(2022, 10, 10, 17, 30),
    createdOn: new Date(),
    description: "",
    subTasks: [],
    updatedOn: new Date(),
}

describe("TaskRow component", () => {
    test("renders task title and due date", () => {
        const setOverlayNameMock = jest.fn()
        const setNotificationMessageMock = jest.fn()
        const { getByText } = render(<TaskRow task={mockTask} setOverlayName={setOverlayNameMock} setNotificationMessage={setNotificationMessageMock}/>)
        const titleElement = getByText(mockTask.title)

        expect(titleElement).toBeInTheDocument()
    })
})
