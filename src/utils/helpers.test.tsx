import { render } from "@testing-library/react"
import { Icon, getColorValue } from "./helpers"

describe("Icon", () => {
    it("renders nothing when name is not valid", () => {
        const { container } = render(<Icon name="invalid" color="#000000" />)
        expect(container.firstChild).toEqual(null)
    })
})

describe("getColorValue", () => {
    it("returns expected color values", () => {
        expect(getColorValue("primary")).toEqual({ backgroundColor: expect.any(String), color: expect.any(String) })
    })

    it("returns default color values for invalid variant", () => {
        expect(getColorValue("invalid")).toEqual({
            backgroundColor: "#FFFFFF",
            color: "#000000",
        })
    })
})
