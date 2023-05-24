import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders App Heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/App/i);
  expect(linkElement).toBeInTheDocument();
});
