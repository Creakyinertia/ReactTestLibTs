import { screen,render } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./counter";


describe("counter",()=>{
    test("heading-test",()=>{
        render(<Counter/>)
        const testHeading=screen.getByRole('heading')
        expect(testHeading).toBeInTheDocument()
    })
    test("button-test",()=>{
        render(<Counter/>)
        const testButton=screen.getByRole('button',
        {name:'Click'}
        )
        expect(testButton).toBeInTheDocument()
    })

    test("renders-initial-state",()=>{
        render(<Counter/>)
        const testHeading=screen.getByRole('heading')
        expect(testHeading).toHaveTextContent('0')
    })

    test("renders-changed-state",async ()=>{
        user.setup()
        render(<Counter/>)
        const incrementButton=screen.getByRole('button',
        {name:'Click'}
        )
        await user.click(incrementButton)
        await user.click(incrementButton)
        await user.click(incrementButton)
        const incrementHeading=screen.getByRole('heading')
        expect(incrementHeading).toHaveTextContent('3')
    })

}
)