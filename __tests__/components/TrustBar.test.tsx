import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TrustBar from '@/components/TrustBar';

describe('TrustBar Component', () => {
  it('renders all stat labels correctly', () => {
    render(<TrustBar />);
    
    expect(screen.getByText(/Pilgrims Sent/i)).toBeInTheDocument();
    expect(screen.getByText(/Years Experience/i)).toBeInTheDocument();
    expect(screen.getByText(/Customer Support/i)).toBeInTheDocument();
    expect(screen.getByText(/Licensed & Authorized/i)).toBeInTheDocument();
  });

  it('renders with correct structure', () => {
    const { container } = render(<TrustBar />);
    const section = container.querySelector('section');
    
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass('bg-green');
  });
});
