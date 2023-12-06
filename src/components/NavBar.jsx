import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  let root;
  let navbar;
  const [navSize, setNavSize] = useState('small');

  useEffect(() => {
    root = document.documentElement;
    navbar = document.getElementById('NavBar__inner');
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navSize]);

  const handleScroll = () => {
    if (root.scrollTop > 200 && navSize === 'big') {
      navbar.classList.remove('NavBar__inner--big');
      navbar.classList.add('NavBar__inner--small');
      setNavSize('small');
    } else if (root.scrollTop < 100 && navSize === 'small') {
      navbar.classList.remove('NavBar__inner--small');
      navbar.classList.add('NavBar__inner--big');
      setNavSize('big');
    }
  };

  return (
    <nav id="NavBar">
      <div id="NavBar__inner" className="NavBar__inner--big inner-section">
        <div id="Logo">
          <Link to="/">Robert Matthew Brooks</Link>
        </div>
        <Link to="/" className="NavBar__link">
          Home
        </Link>
        <Link to="/about" className="NavBar__link">
          About
        </Link>
        <Link to="/projects" className="NavBar__link">
          Projects
        </Link>
        <Link to="/contact" className="NavBar__link">
          Contact
        </Link>
      </div>
    </nav>
  );
}
