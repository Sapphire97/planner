import { render, screen } from "@testing-library/react"
import Body from "./Body"

describe("Body", () => {
    it("renders the component with a default tab", () => {
        render(<Body />)
        expect(screen.getByText("Today")).toBeInTheDocument()
    })
})
