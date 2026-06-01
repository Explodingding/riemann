import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Lommel and Uganda research hub', () => {
  render(<App />);
  expect(screen.getByText(/Lommel vs Uganda/i)).toBeInTheDocument();
  expect(screen.getByText(/Environmental protection research hub/i)).toBeInTheDocument();
});
