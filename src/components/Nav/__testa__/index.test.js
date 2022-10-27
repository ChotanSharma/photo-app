import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';


afterEach(cleanup);

describe('Nav component', () => {
    // render first test

    it('renders', () => {
        render(<Nav/>)
    })


    //snapshot test
    it('matches snapshot dom node structure', () => {
        const {asFragment} = render(<Nav/>);
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
    const { getByLabelText } = render(<Nav />);
  
    expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})




describe('links are visible', () => {
    it('inserts texts into the links', () => {
        // Arrage
        const {getByTestId} = render(<Nav/>);
        expect(getByTestId('link')).toHaveTextContent('oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
        

        //Assert
    })
})
