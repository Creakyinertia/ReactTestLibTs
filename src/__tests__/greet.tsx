import { render,screen } from '@testing-library/react';
import { Greet } from '../components/greet/greet';

describe('Greet',()=>{
    test('renders text with hello', () => {
        render(<Greet/>);
        const textelement=screen.getByText('Hello');
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
