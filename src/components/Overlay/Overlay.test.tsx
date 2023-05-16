import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import Overlay from "./Overlay"

describe("Overlay", () => {
    const setOverlayNameMock = jest.fn()
    const setNotificationMessageMock = jest.fn()
    const overlayName = "test"

    afterEach(() => {
        jest.resetAllMocks()
    })

    it("renders without crashing", () => {
        render(<Overlay name={overlayName} setOverlayName={setOverlayNameMock} setNotificationMessage={setNotificationMessageMock} />)
    })

    it("does not render when name prop is an empty string", () => {
        render(<Overlay name="" setOverlayName={setOverlayNameMock} setNotificationMessage={setNotificationMessageMock} />)
        expect(screen.queryByTestId("overlay-container")).not.toBeInTheDocument()
    })

    it("renders when name prop is provided", () => {
        render(<Overlay name={overlayName} setOverlayName={setOverlayNameMock} setNotificationMessage={setNotificationMessageMock} />)
        expect(screen.queryByTestId("overlay-container")).toBeInTheDocument()
    })

    it("closes overlay when shadow is clicked", () => {
        render(<Overlay name={overlayName} setOverlayName={setOverlayNameMock} setNotificationMessage={setNotificationMessageMock} />)
        fireEvent.click(screen.getByTestId("shadow"))
        expect(setOverlayNameMock).toHaveBeenCalledTimes(1)
        expect(setOverlayNameMock).toHaveBeenCalledWith("")
    })
})
