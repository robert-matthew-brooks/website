import './LanguageButton.css';

export default function LanguageButton(props) {
  return (
    <span className={`LanguageButton LanguageButton--${props.type}`}>
      {props.language}
    </span>
  );
}
