// import { render,screen,fireEvent } from "@testing-library/react";
// import Assigned from "./assigned";
export{}
// describe("assigned-tests",()=>{
//     test("should display headings as provided",()=>{
//         render(<Assigned/>);
    
//         const h1 = screen.getByText('Our work is the presentation of our capabilities');
//         const h2 = screen.getByText('Clean desk and clear screen');
//         const h3 = screen.getByText('Living the Seal Life');
//         expect(h1).toBeInTheDocument();
//         expect(h2).toBeInTheDocument();
//         expect(h3).toBeInTheDocument();
//     })

//     test("Render elements",()=>{
//         render(<Assigned/>);
//         const textElement = screen.getByLabelText("Name") 
//         expect(textElement).toBeInTheDocument();
//     })

//     // test("should submit the form successfully",()=>{
//     //     render(<Assigned/>);
//     //     const nameInput = screen.getByLabelText("Name");
//     //     const passwordInput = screen.getByLabelText("Password");;
//     //     fireEvent.change(nameInput, { target: { value: "John" } });
//     //     fireEvent.change(passwordInput, { target: { value: "password123" } });

//     //     const submitButton = screen.getByText("Submit")
//     //     screen.debug()
//     //     fireEvent.click(submitButton);
        
//     // })

//     test("should not submit the form and display an error message",()=>{
//         render(<Assigned/>);
//         const submitButton = screen.getByText("Submit");
//         fireEvent.click(submitButton);
//     })
//     test("should update the value of the password input field",()=>{
//         render(<Assigned/>);
//         const passwordInput = screen.getByLabelText("Password");
//         fireEvent.change(passwordInput, { target: { value: "password123" } });
//     })

//     test("test56", () => {
//         render(<Assigned />);
//         screen.debug()
//         const passwordInput = screen.getByLabelText("Password");
//         fireEvent.change(passwordInput, { target: { value: "verylongpassword1234567890" } });
//         screen.debug()
//         expect(passwordInput.value).toEqual("verylongpassword1234567890");
//     });
    
// })