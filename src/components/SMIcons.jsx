import iconLinkedin from '../assets/icon-linkedin.svg';
import iconGithub from '../assets/icon-github.svg';
import iconYoutube from '../assets/icon-youtube.svg';
import './SMIcons.css';

export default function SMIcons() {
  return (
    <div id="SMIcons">
      <a href="#">
        <img src={iconLinkedin} />
      </a>
      <a href="#">
        <img src={iconGithub} />
      </a>
      <a href="#">
        <img src={iconYoutube} />
      </a>
    </div>
  );
}
