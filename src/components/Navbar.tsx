import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Searchbar from './Searchbar';

function Navbar() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src="/logo.png" alt="Soccer Wrldwide Logo" className="logo-image" />
        </Link>
      </div>

      <nav className="navbar-center">
        <Link to="/about">About Me</Link>
        <Link to="/category/post-match-analysis">Post-Match Analysis</Link>
        <Link to="/category/opinion-pieces">Opinion Pieces</Link>
        <Link to="/category/transfers">Transfers</Link>
      </nav>

      <div className="navbar-right">
        <Searchbar />
        <button>Subscribe</button>
      </div>
    </header>
  );
}

const css = `
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  background-color: rgba(255, 255, 255, 0.7);
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0px;
  z-index: 1000;

  max-width: 1200px;
  margin: 0 auto;
  padding-left: 32px;
  padding-right: 32px;

  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.logo-image {
  height: 70px;
  width: auto;
  object-fit: contain;
}

.navbar-center a {
  margin: 0 12px;
  text-decoration: none;
  color: #555;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 8px;
}
`;

export default Navbar;
