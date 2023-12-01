import iconLinkedin from './assets/icon-linkedin.svg';
import iconGithub from './assets/icon-github.svg';
import iconYoutube from './assets/icon-youtube.svg';
import './SMIcons.css';

export default function SMIcons() {
  return (
    <div id="SMIcons">
      <img class="SMIcons__icon" src={iconLinkedin} />
      <img class="SMIcons__icon" src={iconGithub} />
      <img class="SMIcons__icon" src={iconYoutube} />
    </div>
  );
}
