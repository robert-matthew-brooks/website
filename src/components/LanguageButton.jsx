import './LanguageButton.css';

export default function LanguageButton(props) {
  return (
    <span class={`LanguageButton LanguageButton--${props.type}`}>
      {props.language}
    </span>
  );
}
