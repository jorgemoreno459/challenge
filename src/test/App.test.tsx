import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
describe('<App/>', () => {

  beforeEach(async () => {
    await waitFor(() => {
      render(
          <App />
      );
    });
  });
  test('renders learn react link', () => {
    const container = screen.getByTestId('container');
    expect(container).toBeInTheDocument();
  });
});
