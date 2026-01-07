import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory, createRootRoute, createRouter, RouterProvider } from '@tanstack/react-router';
import { NotFoundPage } from './NotFoundPage';

describe('NotFoundPage', () => {
  const renderWithRouter = () => {
    const rootRoute = createRootRoute({
      component: NotFoundPage,
    })

    const router = createRouter({
      routeTree: rootRoute,
      history: createMemoryHistory({
        initialEntries: ['/'],
      }),
    })

    const { container } = render(<RouterProvider router={router} />)

    // Wait for router to be ready
    return new Promise<typeof container>((resolve) => {
      setTimeout(() => resolve(container), 0)
    })
  }

  it('should render 404 error code', async () => {
    await renderWithRouter()
    expect(screen.getByText('404')).toBeInTheDocument()
  })

  it('should render error title', async () => {
    await renderWithRouter()
    expect(screen.getByText('Page Not Found')).toBeInTheDocument()
  })

  it('should render error message', async () => {
    await renderWithRouter()
    expect(
      screen.getByText("The page you're looking for doesn't exist or has been moved.")
    ).toBeInTheDocument()
  })

  it('should render link to home page', async () => {
    await renderWithRouter()
    const homeLink = screen.getByText('Go Back Home')
    expect(homeLink).toBeInTheDocument()
    expect(homeLink).toHaveAttribute('href', '/')
  })

  it('should have correct CSS classes', async () => {
    await renderWithRouter()
    const container = screen.getByText('404').closest('.not-found')
    expect(container).toBeInTheDocument()
    expect(screen.getByText('404')).toHaveClass('error-code')
    expect(screen.getByText('Page Not Found')).toHaveClass('error-title')
    expect(screen.getByText('Go Back Home')).toHaveClass('back-link')
  });
});