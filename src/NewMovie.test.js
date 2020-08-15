import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewMovie from './NewMovie';

test('<NewMovie>', () => {
    const { debug, getByTestId, queryByTestId, container, getByText } = render(<NewMovie />);
    debug();

    expect(getByTestId('page-title').textContent).toBe('New Movie');
    expect(queryByTestId('movie-form').textContent).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
    console.log(container.firstChild);

    fireEvent.click(getByText('Submit'));

})
