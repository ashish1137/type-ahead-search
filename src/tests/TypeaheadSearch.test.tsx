import { fireEvent, render, screen } from '@testing-library/react';
import TypeaheadSearch from '../components/TypeaheadSearch';

test('renders search text box', () => {
    render(<TypeaheadSearch />);
    const divElement = screen.getByPlaceholderText("Type something like hello...");
    expect(divElement).toBeInTheDocument();
});

test('renders search label', () => {
    render(<TypeaheadSearch />);
    const divElement = screen.getByLabelText("Search");
    expect(divElement).toBeInTheDocument();
});
