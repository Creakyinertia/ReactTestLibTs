import { render,screen } from '@testing-library/react';
import { Greet } from './greet';

describe('Greet',()=>{
    test('renders text with hello', () => {
        render(<Greet/>);
        const textelement=screen.getByText(/hello/i);
        expect(textelement).toBeInTheDocument();
    })
    
    describe('nested',()=>{
        test('renders text with name', () => {
        render(<Greet name='Darshu'/>);
        const textelement=screen.getByText(/Darshu/i);
        expect(textelement).toBeInTheDocument();
    })
})
})
