import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import EditTaskDialog from "./EditTaskDialog"
import '@testing-library/jest-dom/extend-expect';

describe("EditTaskDialog", () => {
    const closeOverlay = jest.fn()

    beforeEach(() => {
        closeOverlay.mockClear()
    })

    it("should render the edit task dialog", () => {
        render(<EditTaskDialog closeOverlay={closeOverlay} />)
        expect(screen.getByText("Edit a task")).toBeInTheDocument()
        expect(screen.getByLabelText("Title")).toBeInTheDocument()
        expect(screen.getByLabelText("Description")).toBeInTheDocument()
        expect(screen.getByLabelText("Due date")).toBeInTheDocument()
        expect(screen.getByText("Add a subtask")).toBeInTheDocument()
        expect(screen.getByText("Save")).toBeInTheDocument()
    })

    it("should update the title input", () => {
        render(<EditTaskDialog closeOverlay={closeOverlay} />)
        const titleInput = screen.getByLabelText("Title")
        expect(titleInput).toHaveValue("")
        userEvent.type(titleInput, "New Title")
        expect(titleInput).toHaveValue("New Title")
    })

    it("should update the description textarea", () => {
        render(<EditTaskDialog closeOverlay={closeOverlay} />)
        const descriptionTextarea = screen.getByLabelText("Description")
        expect(descriptionTextarea).toHaveValue("")
        userEvent.type(descriptionTextarea, "New description")
        expect(descriptionTextarea).toHaveValue("New description")
    })

    it("should update the due date input", () => {
        render(<EditTaskDialog closeOverlay={closeOverlay} />)
        const dueDateInput = screen.getByLabelText("Due date")
        expect(dueDateInput).toHaveValue("")
        fireEvent.change(dueDateInput, { target: { value: "2023-12-31T23:59" } })
        expect(dueDateInput).toHaveValue("2023-12-31T23:59")
    })

    it("should call onSubmit when the save button is clicked", () => {
        render(<EditTaskDialog closeOverlay={closeOverlay} />)
        const saveButton = screen.getByText("Save")
        userEvent.click(saveButton)
        expect(closeOverlay).toHaveBeenCalledTimes(1)
    })
})