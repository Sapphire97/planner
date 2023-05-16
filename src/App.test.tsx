import { render, screen } from "@testing-library/react"
import App from "./App"

describe("App", () => {
    it("should render Navbar", () => {
        render(<App />)
        const navbarElement = screen.getByTestId("navbar-container")
        expect(navbarElement).toBeInTheDocument()
    })

    it("should render Body", () => {
        render(<App />)
        const bodyElement = screen.getByTestId("body-container")
        expect(bodyElement).toBeInTheDocument()
    })
})
