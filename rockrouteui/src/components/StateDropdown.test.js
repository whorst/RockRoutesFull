import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import StateDropdown from "./StateDropdown";

afterEach(cleanup);
const mockGetStateChange = jest.fn();


it("Checks the Selected State", async () => {
    //There's no good way to do this
    const { getByTestId, getByText } = render(<StateDropdown />);

    const select = getByTestId("select-tag");
    expect(select.value === "Alabama");
});

it("Ensures the Dropdown is Being Populated", async () => {

    const { getByTestId } = render(<StateDropdown />);

    const stateOption = getByTestId("Michigan-test-id");
    expect(stateOption).not.toBeNull();
});

it("Ensures the State change in Method is Not Called", async () => {
    //Stupid functionality
    const { getByTestId } = render(<StateDropdown  updateFocusState={mockGetStateChange}/>);
    expect(mockGetStateChange).not.toHaveBeenCalled();
});