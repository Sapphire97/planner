import React from "react"
import { fireEvent, render } from "@testing-library/react"
import RadioButton from "./RadioButton"
import "@testing-library/jest-dom/extend-expect"

describe("RadioButton component", () => {
    it("renders the content prop", () => {
        const content = "Option 1"
        const { getByText } = render(<RadioButton content={content} value="1" onClick={() => {}} />)
        expect(getByText(content)).toBeInTheDocument()
    })

    it("calls the setValue prop with the correct value when radio button is clicked", () => {
        const value = "2"
        const setValue = jest.fn()
        const { getByLabelText } = render(<RadioButton content="Option 2" value={value} onClick={setValue} />)
        const radioInput = getByLabelText("Option 2")
        fireEvent.click(radioInput)
        expect(setValue).toHaveBeenCalledWith(value)
    })
})
