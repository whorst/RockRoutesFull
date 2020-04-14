import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Slide from "./Slide";

afterEach(cleanup);
const createRockInfoCards = jest.fn();
const mockUpdateFocusRoute = jest.fn();

it("Should Call CreateRockInfoCard", async () => {
    //There's no good way to do this
    const rockRouteList = [{
        latitude: "35.7465",
        location: "[Arkansas,Rock Creek,Wood Wall]",
        longitude: "-93.2687",
        name: "MyRoute",
        pitches: " ",
        rating: "5.10b",
        stars: "3",
        state: "arkansas",
        type: "Sport"
    },{
        latitude: "35.7465",
        location: "[Arkansas,Rock Creek,Wood Wall]",
        longitude: "-93.2687",
        name: "MyRouteTwo",
        pitches: " ",
        rating: "5.10b",
        stars: "3",
        state: "arkansas",
        type: "Sport"
    }]
    const {getAllByTestId, getByText} = render(<Slide rockRoutes={rockRouteList} updateFocusRoute = {mockUpdateFocusRoute}/>);

    expect(mockUpdateFocusRoute).not.toHaveBeenCalled();
    const select = getAllByTestId("card-title");
    expect(select.length).toEqual(2);
});
//
