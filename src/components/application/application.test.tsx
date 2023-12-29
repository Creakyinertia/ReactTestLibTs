import { render,screen } from "@testing-library/react";
import { Application } from "./application";

test("Render elements",()=>{
    render(<Application/>);
    const textElement = screen.getByRole("textbox",
    {name:'Name'}
    );
    expect(textElement).toBeInTheDocument();

    const placeholderElement = screen.getByPlaceholderText("name");
    expect(placeholderElement).toBeInTheDocument();

    const datatestElement = screen.getByTestId("custom");
    expect(datatestElement).toBeInTheDocument();

    const DescElement = screen.getByRole("textbox",
    {name:'description'}
    );
    expect(DescElement).toBeInTheDocument();

    const paratextElement = screen.getByText("All fields are mandatory");
    expect(paratextElement).toBeInTheDocument();


    const comboboxElement = screen.getByRole("combobox");
    expect(comboboxElement).toBeInTheDocument();

    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
})