import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Tabs from "./Tabs"

describe("Tabs component", () => {
    const availableTabs = ["Tab 1", "Tab 2", "Tab 3"]
    const setActiveTab = jest.fn()

    it("should render the correct number of tabs", () => {
        const { getAllByRole } = render(
            <Tabs availableTabs={availableTabs} activeTab={availableTabs[0]} setActiveTab={setActiveTab} />
        )

        const tabs = getAllByRole("tab")

        expect(tabs).toHaveLength(availableTabs.length)
    })

    it("should render the tabs with the correct labels", () => {
        const { getAllByRole } = render(
            <Tabs availableTabs={availableTabs} activeTab={availableTabs[0]} setActiveTab={setActiveTab} />
        )

        const tabs = getAllByRole("tab")

        tabs.forEach((tab, index) => {
            expect(tab.textContent).toEqual(availableTabs[index])
        })
    })

    it("should set the active tab when a tab is clicked", () => {
        const { getAllByRole } = render(
            <Tabs availableTabs={availableTabs} activeTab={availableTabs[0]} setActiveTab={setActiveTab} />
        )

        const tabs = getAllByRole("tab")

        fireEvent.click(tabs[1])

        expect(setActiveTab).toHaveBeenCalledWith(availableTabs[1])
    })
})
