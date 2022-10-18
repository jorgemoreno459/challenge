import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import Search from "../../../pages/search/components/Search";

describe('<Search/>', () => {

    beforeEach(async () => {
        await waitFor(() => {
            render(
                <Search />
            );
        });
    });

    test('should render successfully', () => {
        const search = screen.getByTestId('search');
        expect(search).toBeInTheDocument();
    });

    test('should change the search value',async () => {
        const inputSearch = screen.getByTestId('searchInput') as HTMLInputElement;
        expect(inputSearch.value).toBe('')

        await waitFor(() => {
            fireEvent.change(inputSearch, {target: { value: 'iphone'}})
        })
        expect(inputSearch.value).toBe('iphone');
    });

    test('should search',async () => {
        const inputSearch = screen.getByTestId('searchInput') as HTMLInputElement;
        await waitFor(() => {
            fireEvent.change(inputSearch, {target: { value: 'iphone'}})
        })
        const submitButton = screen.getByTestId('submitButton') as HTMLButtonElement;
        await waitFor(() => {
            fireEvent.click(submitButton);
        })
    });
});