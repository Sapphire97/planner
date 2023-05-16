import React from "react"
import { render } from "@testing-library/react"
import Breadcrumb from "./Breadcrumb"

describe("Breadcrumb", () => {
    const breadcrumbs = ["First", "Second", "Third"]

    it("renders the correct number of breadcrumbs", () => {
        const { getAllByTestId } = render(<Breadcrumb breadcrumbs={breadcrumbs} />)
        const breadcrumbItems = getAllByTestId("breadcrumb-item")

        expect(breadcrumbItems).toHaveLength(breadcrumbs.length + 1)
    })

    it("renders the last breadcrumb differently", () => {
        const { getAllByTestId } = render(<Breadcrumb breadcrumbs={breadcrumbs} />)
        const breadcrumbItems = getAllByTestId("breadcrumb-item")
        const lastBreadcrumb = breadcrumbItems[breadcrumbItems.length - 1]
        const afterStyle = getComputedStyle(lastBreadcrumb, "::after");
        expect(afterStyle.content).toBe("");
    })
})
