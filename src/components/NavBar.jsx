import Logo from './Logo.jsx';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav id="NavBar">
      <div id="NavBar__inner">
        <Logo />
        <a href="" className="NavBar__link">
          Recent Work
        </a>
        <a href="" className="NavBar__link">
          Contact
        </a>
      </div>
    </nav>
  );
}
