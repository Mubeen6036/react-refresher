import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Greeting from './greeting';

describe('Greeting Test Suite', ()=>{

    test('Renders Hello world', ()=>{
        render(<Greeting/>);
        const HelloWorldElement = screen.getByText('Hello World', {exact: false});
        expect(HelloWorldElement).toBeInTheDocument();
    })

    test('button not clicked', ()=>{
        render(<Greeting/>);
        const HelloWorldElement = screen.getByText(`It's good to see you.`, {exact: false});
        expect(HelloWorldElement).toBeInTheDocument();
    })

    test('button clicked', ()=>{
        //arrange
        render(<Greeting/>);
        //act
        const button = screen.getByRole('button');
        userEvent.click(button);
        //Assert
        const HelloWorldElement = screen.getByText(`Changed`, {exact: false});
        expect(HelloWorldElement).toBeInTheDocument();
    })

})
