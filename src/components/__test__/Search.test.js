import Body from "../Body";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../../../mocks/mockResListData.json";
import {act} from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MOCK_DATA)
        }
    });
});

it("It Should render the Body Component and search restaurant list with text imput Pizza", async() => {
    await act(async () => render(
        <BrowserRouter>
    <Body/>
    </BrowserRouter>
    ));

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(9);

    const searchButton = screen.getByRole("button", {name: "Search"})

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput , {target: { value : "Pizza" } })

    fireEvent.click(searchButton);

    const cards = screen.getAllByTestId("resCard")

    expect(cards.length).toBe(3);
})