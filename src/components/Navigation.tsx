import { Link } from '@tanstack/react-router';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Cinedex
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <a href="https://cinedex.online/movie-svc/scalar/" className="nav-link" target="_self" rel="noopener noreferrer">
              API Docs
            </a>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;