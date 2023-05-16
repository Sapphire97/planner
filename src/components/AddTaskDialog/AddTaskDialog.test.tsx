import React from "react"
import { render, fireEvent } from "@testing-library/react"
import AddTaskDialog from "./AddTaskDialog"
import '@testing-library/jest-dom/extend-expect';

describe("AddTaskDialog", () => {
    const closeOverlayMock = jest.fn()
    const setNotificationMessageMock = jest.fn()

    afterEach(() => {
        jest.resetAllMocks()
    })

    it("renders title input correctly", () => {
        const { getByLabelText } = render(<AddTaskDialog closeOverlay={closeOverlayMock} setNotificationMessage={setNotificationMessageMock} />)
        const input = getByLabelText("Title")
        expect(input).toBeInTheDocument()
        expect(input).toHaveAttribute("type", "text")
    })

    it("renders description textarea correctly", () => {
        const { getByLabelText } = render(<AddTaskDialog closeOverlay={closeOverlayMock} setNotificationMessage={setNotificationMessageMock} />)
        const textarea = getByLabelText("Description")
        expect(textarea).toBeInTheDocument()
    })

    it("renders due date input correctly", () => {
        const { getByLabelText } = render(<AddTaskDialog closeOverlay={closeOverlayMock} setNotificationMessage={setNotificationMessageMock} />)
        const input = getByLabelText("Due date")
        expect(input).toBeInTheDocument()
        expect(input).toHaveAttribute("type", "datetime-local")
    })

    it("calls closeOverlay on save button click", () => {
        const { getByText } = render(<AddTaskDialog closeOverlay={closeOverlayMock} setNotificationMessage={setNotificationMessageMock} />)

        fireEvent.click(getByText("Save"))

        expect(closeOverlayMock).toHaveBeenCalledTimes(1)
    })
})
