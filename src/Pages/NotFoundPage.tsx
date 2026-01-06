import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__code">404</h1>
      <h2 className="not-found__title">Page Not Found</h2>
      <p className="not-found__description">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="not-found__link">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
