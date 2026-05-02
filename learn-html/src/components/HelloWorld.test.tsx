import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { HelloWorld } from './HelloWorld';

describe('HelloWorld Component', () => {
  it('renders with the given message', () => {
    render(<HelloWorld msg='Hello, Vitest!' />);
    expect(screen.getByText('Hello, Vitest!')).toBeInTheDocument();
  });

  it('increments count on button click', () => {
    render(<HelloWorld msg='Hello, Vitest!' />);
    const button = screen.getByRole('button', { name: /count is 0/i });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 1');
  });

  it('renders links and texts as expected', () => {
    render(<HelloWorld msg='Hello, Vitest!' />);

    expect(screen.getByText('create-react')).toBeInTheDocument();
    expect(screen.getByText('React Docs Scaling up Guide')).toBeInTheDocument();
    // expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(
      screen.getByText('Click on the Vite and Vue logos to learn more'),
    ).toBeInTheDocument();
  });
});
