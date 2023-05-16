import React from "react"
import { render, screen } from "@testing-library/react"
import Notification from "./Notification"
import "@testing-library/jest-dom/extend-expect"

describe("Notification", () => {
    it("should render the notification message", () => {
        const notificationMessage = "Test notification"
        const setNotificationMessage = jest.fn()
        render(
            <Notification
                notificationMessage={notificationMessage}
                setNotificationMessage={setNotificationMessage}
            />
        )
        const notificationElement = screen.getByText(notificationMessage)
        expect(notificationElement).toBeInTheDocument()
    })

    it("should not render anything when the notification message is empty", () => {
        const notificationMessage = ""
        const setNotificationMessage = jest.fn()
        render(
            <Notification
                notificationMessage={notificationMessage}
                setNotificationMessage={setNotificationMessage}
            />
        )
        const notificationElement = screen.queryByTestId("notification-container")
        expect(notificationElement).toBeNull()
    })
})
