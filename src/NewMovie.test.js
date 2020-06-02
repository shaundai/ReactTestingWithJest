import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import NewMovie from './NewMovie';

test('<NewMovie>', () => {
    const { debug, getByTestId, queryByTestId } = render(<NewMovie />);
    debug();

    expect(getByTestId('page-title').textContent).toBe('New Movie');
    expect(queryByTestId('movie-form').textContent).toBeTruthy;

})
