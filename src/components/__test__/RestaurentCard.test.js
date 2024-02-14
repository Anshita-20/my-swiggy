import { render, screen } from "@testing-library/react"
import RestaurentCard, {withPromotedLabel} from "../RestaurentCard"
import '@testing-library/jest-dom';
import MOCK_DATA from "../../../mocks/resCardMock.json";

it("It should render RestaurantCard component with props data", ()=>{
    render(
        <RestaurentCard resData={MOCK_DATA} />
    );
    const name = screen.getByText("BOX8 - Desi Meals");
    expect(name).toBeInTheDocument();

});

xit("should render RestaurantCard component with Promoted Label", () => {
    render(
        <withPromotedLabel />
    );
    const text = screen.getByText("Open")
    expect(text).toBeInTheDocument();
  });