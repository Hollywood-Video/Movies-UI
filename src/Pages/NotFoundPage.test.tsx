import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NotFoundPage } from './NotFoundPage';

vi.mock('@tanstack/react-router', () => ({
  Link: ({ to, className, children }: { to: string; className?: string; children: React.ReactNode }) => (
    <a href={to} className={className}>
      {children}
    </a>
  ),
}));

describe('NotFoundPage', () => {
  it('should render "404" on page', () => {
    render(<NotFoundPage />)
    expect(screen.getByText('404')).toBeInTheDocument()
  })

  it('should render "Page Not Found"', () => {
    render(<NotFoundPage />)
    expect(screen.getByText('Page Not Found')).toBeInTheDocument()
  })

  it('should render error message', () => {
    render(<NotFoundPage />)
    expect(
      screen.getByText("The page you're looking for doesn't exist or has been moved.")
    ).toBeInTheDocument()
  });
});