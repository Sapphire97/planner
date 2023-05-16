import { render, fireEvent } from "@testing-library/react"
import CloseDialog from "./CloseDialog"

describe("CloseDialog component", () => {
    it("should render correctly", () => {
        const { getByRole } = render(<CloseDialog closeDialog={() => {}} />)
        const closeDialogButton = getByRole("button")

        expect(closeDialogButton).toBeInTheDocument()
    })

    it("should call closeDialog function when clicked", () => {
        const closeDialogMock = jest.fn()
        const { getByRole } = render(<CloseDialog closeDialog={closeDialogMock} />)
        const closeDialogButton = getByRole("button")

        fireEvent.click(closeDialogButton)

        expect(closeDialogMock).toHaveBeenCalled()
    })
})