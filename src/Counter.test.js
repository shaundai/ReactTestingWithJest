/* eslint-disable no-undef */
/* eslint-disable eol-last */
/* eslint-disable indent */
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('<Counter />', () => {
    const { debug, getByTestId } = render(<Counter />);
    debug();

    const counterButton = getByTestId('counter-button');
    expect(counterButton.tagName).toBe('BUTTON');
    expect(counterButton.textContent).toBe('0');

    fireEvent.click(counterButton);
    expect(counterButton.textContent).toBe('1');

    fireEvent.click(counterButton);
    expect(counterButton.textContent).toBe('2');
});