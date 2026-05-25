import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navbar from '@/components/Navbar';

describe('Navbar Component', () => {
  it('renders navigation links', () => {
    render(<Navbar />);
    
    expect(screen.getByText('UMRAH')).toBeInTheDocument();
    expect(screen.getByText('TOURS')).toBeInTheDocument();
    expect(screen.getByText('GALLERY')).toBeInTheDocument();
    expect(screen.getByText('ABOUT')).toBeInTheDocument();
    expect(screen.getByText('CONTACT')).toBeInTheDocument();
  });

  it('renders Book Now button', () => {
    render(<Navbar />);
    
    const bookButton = screen.getByText('BOOK NOW');
    expect(bookButton).toBeInTheDocument();
  });

  it('renders logo image', () => {
    render(<Navbar />);
    
    const logo = screen.getByAlt('AL-INFOTECH Tours & Travels');
    expect(logo).toBeInTheDocument();
  });
});
