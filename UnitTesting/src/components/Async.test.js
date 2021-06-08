import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe('Async Test Suite',()=>{
    test('renders post if request succeeds', async ()=>{
        //arrange
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json : async ()=>{
                return [{id:'p1', title : 'First Post'}]
            }
        });
        render(<Async/>);
        //act 
        //nothing
        const listItems = await screen.findAllByRole('listitem');
        expect(listItems).not.toHaveLength(0);
    })
})