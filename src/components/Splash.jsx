import profilePhoto from '../assets/profile-photo.jpg';
import Button from './Button';
import LanguageButton from './LanguageButton';
import './Splash.css';

export default function Splash() {
  return (
    <header id="Splash">
      <div id="Splash__background">
        <div></div>
        <div></div>
      </div>

      <div id="Splash__inner">
        <div id="Splash__left">
          <div
            id="Splash__photo"
            style={{ background: `url(${profilePhoto}) center/cover` }}
          ></div>
          <Button link="#">
            <i className="fa fa-whatsapp"></i> Let's chat on WhatsApp
          </Button>
        </div>

        <article id="Splash__right">
          <h3>Hi &#128075;, I'm Robert, a</h3>
          <h2>Software Developer.</h2>
          <p>
            I combine <b>front end</b>, <b>back end</b> and{' '}
            <b>automation testing</b> to produce full stack applications. My
            priority is creating a great user experience.
          </p>
          <p>My skillset includes:</p>
          <div id="Splash__skill-table">
            <div>Programming:</div>
            <div>
              <LanguageButton language="JavaScript" type="core" />
              <LanguageButton language="Python" type="core" />
              <LanguageButton language="C++" type="core" />
              <LanguageButton language="C#" type="core" />
              <LanguageButton language=".NET" type="core" />
            </div>
            <div>Front End:</div>
            <div>
              <LanguageButton language="HTML" type="fe" />
              <LanguageButton language="CSS" type="fe" />
              <LanguageButton language="React" type="fe" />
              <LanguageButton language="Flutter" type="fe" />
            </div>
            <div>Back End:</div>
            <div>
              <LanguageButton language="Express.js" type="be" />
              <LanguageButton language="SQL" type="be" />
              <LanguageButton language="MongoDB" type="be" />
            </div>
            <div>Testing:</div>
            <div>
              <LanguageButton language="Cypress" type="test" />
              <LanguageButton language="Jest" type="test" />
            </div>
            <div>Utility:</div>
            <div>
              <LanguageButton language="GitHub" type="other" />
              <LanguageButton language="Figma" type="other" />
              <LanguageButton language="Trello" type="other" />
            </div>
          </div>
        </article>
      </div>
    </header>
  );
}
