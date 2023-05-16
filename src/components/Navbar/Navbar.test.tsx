import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";
import '@testing-library/jest-dom/extend-expect';


describe("Navbar component", () => {
    it("renders the navbar title correctly", () => {
        const { getByText } = render(<Navbar />);
        const navbarTitle = getByText(/PLANNER/i);
        expect(navbarTitle).toBeInTheDocument();
    });

    it("renders the navbar container with the correct ID", () => {
        const { getByTestId } = render(<Navbar />);
        const navbarContainer = getByTestId("navbar-container");
        expect(navbarContainer).toHaveAttribute("id", "navbar");
    });
});
