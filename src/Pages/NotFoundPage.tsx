import { Link } from '@tanstack/react-router';
import './NotFoundPage.css';

export const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1 className="error-code">404</h1>
      <h2 className="error-title">Page Not Found</h2>
      <p className="error-message">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="back-link">
        Go Back Home
      </Link>
    </div>
  );
};
