import { screen,render } from "@testing-library/react";
import Users from "./users";

describe('testing',()=>{
    it("renders welcome message", () => {
        render(<Users/>)
        const text=screen.getByText('Users')
        expect(text).toBeInTheDocument();
    })
})