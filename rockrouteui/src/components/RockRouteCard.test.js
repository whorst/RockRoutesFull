import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import RockRouteCard from "./RockRouteCard";

afterEach(cleanup);


it("Create the Card with the Right Meta Data", async () => {
    const mockRouteData = {
        name: "This Fake Boi",
        type: "This Fake Trad",
        rating: "4 Stars"
    }
    const { getByTestId, getByText } = render(<RockRouteCard rockRouteData={mockRouteData} />);

    const titleElement = getByTestId("card-title");
    const dataElement = getByTestId("card-data");


    const titleElementMetaData = Object.values(titleElement)[0];

    expect(titleElementMetaData.elementType).toEqual("p")
    expect(titleElementMetaData.memoizedProps.children.props.children).toEqual("This Fake Boi");
//    expect(select.value === "Alabama");
});
