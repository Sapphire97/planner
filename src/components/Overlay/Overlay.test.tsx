import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import Overlay from "./Overlay"

describe("Overlay", () => {
    const setOverlayNameMock = jest.fn()

    afterEach(() => {
        jest.resetAllMocks()
    })

    it("renders without crashing", () => {
        render(<Overlay name="test" setOverlayName={setOverlayNameMock} />)
    })

    it("does not render when name prop is an empty string", () => {
        render(<Overlay name="" setOverlayName={setOverlayNameMock} />)
        expect(screen.queryByTestId("overlay-container")).not.toBeInTheDocument()
    })

    it("renders when name prop is provided", () => {
        const overlayName = "test"
        render(<Overlay name={overlayName} setOverlayName={setOverlayNameMock} />)
        expect(screen.queryByTestId("overlay-container")).toBeInTheDocument()
    })

    it("calls setOverlayName when shadow is clicked", () => {
        const overlayName = "test"
        render(<Overlay name={overlayName} setOverlayName={setOverlayNameMock} />)
        fireEvent.click(screen.getByTestId("shadow"))
        expect(setOverlayNameMock).toHaveBeenCalledTimes(1)
        expect(setOverlayNameMock).toHaveBeenCalledWith("")
    })
})
