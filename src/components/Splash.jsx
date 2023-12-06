import Button from './Button';
import SMIcons from './SMIcons';
import './Splash.css';

export default function Splash() {
  return (
    <section id="Splash">
      <div id="Splash__background">
        <div></div>
        <div></div>
      </div>

      <div id="Splash__inner" className="inner-section">
        <div id="Splash__left">
          <div id="Splash__photo"></div>
        </div>

        <article id="Splash__right">
          <div>
            <h3>Hi &#128075;, I'm Robert, a</h3>
            <h2>Software Developer.</h2>
            <p>Examples of my work below.</p>
          </div>

          <Button link="/contact">Get In Touch</Button>

          <SMIcons />
        </article>
      </div>
    </section>
  );
}
