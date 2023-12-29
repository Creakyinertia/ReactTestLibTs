import { render,screen } from '@testing-library/react';
import Codev from './codev'
import user from '@testing-library/user-event';

describe(
    'App', () => {
        it('renders count', () => {
            render(<Codev count={0}/>)
            const vcount=screen.getByRole('heading')
            expect(vcount).toBeInTheDocument();
        })
        it('renders all',async () => {
            const incrementHandler=jest.fn()
            const decrementHandler=jest.fn()
            render(<Codev count={0}
                incrementHandler={incrementHandler}
                decrementHandler={decrementHandler} 
                />)
            const ibutton=screen.getByRole('button',{
                name:'increment'
            })
            const dbutton=screen.getByRole('button',{
                name:'decrement'
            })
            await user.click(ibutton)
            await user.click(ibutton)
            await user.click(dbutton)
            expect(incrementHandler).toHaveBeenCalledTimes(2)
            expect(decrementHandler).toHaveBeenCalledTimes(1)
        })
    }
)
