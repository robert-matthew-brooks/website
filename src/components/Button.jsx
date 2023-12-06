import { Link } from 'react-router-dom';
import './Button.css';

export default function Button({ link, type, children }) {
  if (link)
    return (
      <Link to={link} className="Button">
        {children}
      </Link>
    );
  else if (type === 'submit')
    return (
      <button type="submit" className="Button">
        {children}
      </button>
    );
}
