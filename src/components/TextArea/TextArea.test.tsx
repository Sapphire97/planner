import React from "react"
import { render, fireEvent } from "@testing-library/react"
import TextArea from "./TextArea"
import "@testing-library/jest-dom/extend-expect"

describe("TextArea", () => {
    it("renders the label correctly", () => {
        const onChange = jest.fn()
        const { getByText } = render(<TextArea label="test label" onChange={onChange} />)
        expect(getByText("test label")).toBeInTheDocument()
    })

    it("renders the initial value correctly", () => {
        const onChange = jest.fn()
        const { getByDisplayValue } = render(<TextArea label="test label" value="initial value" onChange={onChange} />)
        expect(getByDisplayValue("initial value")).toBeInTheDocument()
    })

    it("calls the onChange callback correctly", () => {
        const handleChange = jest.fn()
        const { getByLabelText } = render(<TextArea label="test label" onChange={handleChange} />)
        const textarea = getByLabelText("test label")

        fireEvent.change(textarea, { target: { value: "new value" } })
        expect(handleChange).toHaveBeenCalledWith("new value")
    })
})
