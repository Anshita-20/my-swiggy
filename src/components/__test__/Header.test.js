import { render,screen, fireEvent } from "@testing-library/react";
import Header from '../Header'
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

// describe("It should render Header component ", () => {
    it("It should render Header component with Login button", ()=> {
        render(
       <BrowserRouter>
            <Provider store={appStore}>
                 <Header />
            </Provider>
      </BrowserRouter>
        )

    const loginButton = screen.getByRole("button",{name :"Login"});
    expect(loginButton).toBeInTheDocument();
    });

    it("It should render Header component with cart items", ()=> {
        render(
       <BrowserRouter>
            <Provider store={appStore}>
                 <Header />
            </Provider>
      </BrowserRouter>
        )

    const cartItem = screen.getByText(/Cart/);
    expect(cartItem).toBeInTheDocument();
    })

    it("It should change Login button to Logout on click", ()=> {
        render(
       <BrowserRouter>
            <Provider store={appStore}>
                 <Header />
            </Provider>
      </BrowserRouter>
        )

        const loginButton = screen.getByRole("button",{name :"Login"});
        fireEvent.click(loginButton)
        const logoutButton = screen.getByText("Logout")
        expect(logoutButton).toBeInTheDocument();
    })
// })
