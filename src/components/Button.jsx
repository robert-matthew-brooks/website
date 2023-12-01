import './Button.css';

export default function Button({ link, children }) {
  return (
    <a className="Button" href={link}>
      {children}
    </a>
  );
}
