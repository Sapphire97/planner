import { render, fireEvent } from "@testing-library/react"
import Button from "./Button"

describe("Button", () => {
    test("renders correctly with content prop", () => {
        const { getByText } = render(<Button variant="primary" content="Click me" />)
        const buttonElement = getByText("Click me")
        expect(buttonElement).toBeInTheDocument()
    })

    test("calls onClick function when clicked", () => {
        const handleClick = jest.fn()
        const { getByText } = render(<Button variant="primary" content="Click me" onBtnPress={handleClick} />)
        const buttonElement = getByText("Click me")
        fireEvent.click(buttonElement)
        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    test("renders icon when icon prop is provided", () => {
        const { getByTestId } = render(<Button variant="primary" content="Click me" icon="add" />)
        const iconElement = getByTestId("icon-container")
        expect(iconElement).toBeInTheDocument()
    })

    test("applies correct styles for variant prop", () => {
        const { container } = render(<Button variant="primary" content="Click me" />)
        expect(container.firstChild).toHaveStyle("background-color: #007DBC")
        expect(container.firstChild).toHaveStyle("color: #fff")
    })
})
