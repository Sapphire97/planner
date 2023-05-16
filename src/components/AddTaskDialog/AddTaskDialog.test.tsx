import { render, fireEvent } from "@testing-library/react"
import AddTaskDialog from "./AddTaskDialog"

describe("AddTaskDialog", () => {
    const closeOverlay = jest.fn()
    it("renders title input correctly", () => {
        const { getByLabelText } = render(<AddTaskDialog closeOverlay={closeOverlay} />)
        const input = getByLabelText("Title")
        expect(input).toBeInTheDocument()
        expect(input).toHaveAttribute("type", "text")
    })

    it("renders description textarea correctly", () => {
        const { getByLabelText } = render(<AddTaskDialog closeOverlay={closeOverlay} />)
        const textarea = getByLabelText("Description")
        expect(textarea).toBeInTheDocument()
    })

    it("renders due date input correctly", () => {
        const { getByLabelText } = render(<AddTaskDialog closeOverlay={closeOverlay} />)
        const input = getByLabelText("Due date")
        expect(input).toBeInTheDocument()
        expect(input).toHaveAttribute("type", "datetime-local")
    })

    it("calls closeOverlay on save button click", () => {
        const { getByText } = render(<AddTaskDialog closeOverlay={closeOverlay} />)

        fireEvent.click(getByText("Save"))

        expect(closeOverlay).toHaveBeenCalledTimes(1)
    })
})
