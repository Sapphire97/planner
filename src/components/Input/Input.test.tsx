import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Input from "./Input"
import '@testing-library/jest-dom/extend-expect';

describe("Input", () => {
    const handleChange = jest.fn()

    beforeEach(() => {
        handleChange.mockClear()
    })

    it("should render an input element", () => {
        const { getByLabelText } = render(<Input type="text" label="Name" value="Luna" onChange={handleChange} />)
        const inputElement = getByLabelText("Name")

        expect(inputElement).toBeInTheDocument()
        expect(inputElement).toHaveValue("Luna")
        fireEvent.change(inputElement, { target: { value: "Lovegood" } })
        expect(handleChange).toHaveBeenCalledWith("Lovegood")
    })
})
