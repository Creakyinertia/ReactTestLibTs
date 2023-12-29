import { screen,render } from "@testing-library/react";
import Test2 from "./test2";
import userEvent from "@testing-library/user-event";
describe('counter',()=>{
    it("renders counter component", () => {
        render(<Test2/>)
        const renderstextcorrectly=screen.getByRole('heading')
        expect(renderstextcorrectly).toBeInTheDocument()
        const rendersbuttoncorrectly=screen.getByRole('button',{name:'Add'})
        expect(rendersbuttoncorrectly).toBeInTheDocument()
        const rendersbuttonsetcorrectly=screen.getByRole('button',{name:'Set'})
        expect(rendersbuttonsetcorrectly).toBeInTheDocument() 
    })

    it('renders 0 correctly',()=>{
        render(<Test2/>)
        const renderstextcorrectly=screen.getByRole('heading')
        expect(renderstextcorrectly).toHaveTextContent('0')
    })
    it('renders 1 correctly',async ()=>{
        userEvent.setup()
        render(<Test2/>)
        const rendersbutton=screen.getByRole('button',{name:'Add'})
        await userEvent.click(rendersbutton)
        const renderstextcorrectly=screen.getByRole('heading')
        expect(renderstextcorrectly).toHaveTextContent('1')
    })

    it('renders 10 correctly with set',async ()=>{
        userEvent.setup()
        render(<Test2/>)
        const amountInput=screen.getByRole('spinbutton')
        await userEvent.type(amountInput,'10')
        const setbutton=screen.getByRole('button',{name:'Set'})
        await userEvent.click(setbutton)
        const renderstextcorrectly=screen.getByRole('heading')
        expect(renderstextcorrectly).toHaveTextContent('10')
    })

    it('events are in sync',async ()=>{
        userEvent.setup()
        render(<Test2/>)
        const amountInput=screen.getByRole('spinbutton')
        const setbutton=screen.getByRole('button',{name:'Set'})
        const addbutton=screen.getByRole('button',{name:'Add'})
        await userEvent.tab()
        expect(addbutton).toHaveFocus()
        await userEvent.tab()
        expect(amountInput).toHaveFocus()
        await userEvent.tab()
        expect(setbutton).toHaveFocus()
    })
})