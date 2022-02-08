// import App from '../App'

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
// import SearchBar from '../Overview/SearchBar'

import Test from './test';
// import '@testing-library/jest-dom';
// import userEvent from '@testing-library/user-event';


test('Should display copied text', () => {
    // render(<SearchBar searchInput='123' searchItems={() => {}} handleSearchInput={() => {}}/>)
    render(<Test/>)
    })
    // test('Check the result of 5 + ', () => {
    //     expect(5 + 2).toBe(7)
    // })
