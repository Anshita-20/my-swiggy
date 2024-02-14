import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom'

it("Should load the Contact Us page with heading", () =>{
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

it("Should load button insiden Contact page with button", () =>{
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
});

it("Should load button insiden Contact page with text", () =>{
    render(<Contact />);
    const text = screen.getByText("Contact Us Page")
    expect(text).toBeInTheDocument(); 
});

test("Should load button insiden Contact page placeholder", () =>{
    render(<Contact />);
    const placeholder = screen.getByPlaceholderText("name")
    expect(placeholder).toBeInTheDocument(); 
});

test ("It should load all the inputboxes inside the Contact Page", () => {

    render(<Contact />)
    const inputboxes = screen.getAllByRole("textbox");
    expect(inputboxes.length).toBe(2);
})