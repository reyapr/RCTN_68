import { render, screen, prettyDOM } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Learn React');
  console.log(prettyDOM(linkElement))
  expect(linkElement).toBeInTheDocument();
});
