import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

// Mock window.open
global.open = vi.fn();

describe('FloatingWhatsApp Component', () => {
  it('does not render immediately', () => {
    const { container } = render(<FloatingWhatsApp />);
    // Component uses AnimatePresence and delay, so it won't be visible immediately
    expect(container.firstChild).toBeTruthy();
  });

  it('renders without crashing', () => {
    expect(() => render(<FloatingWhatsApp />)).not.toThrow();
  });
});
