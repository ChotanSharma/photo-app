import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';


afterEach(cleanup);

describe('About component', () => {
    // render first test

    it('renders', () => {
        render(<About/>)
    })


    //render second test
    it('matches snapshot dom node structure', () => {
        const {asFragment} = render(<About/>);
        expect(asFragment()).toMatchSnapshot();
    })
})