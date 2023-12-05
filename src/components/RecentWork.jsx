import LanguageButton from './LanguageButton';
import './RecentWork.css';

export default function RecentWork() {
  return (
    <section id="RecentWork">
      <div id="RecentWork__inner" className="inner-section">
        <h2 id="RecentWork__title">Recent Work</h2>

        <article className="RecentWork__card">
          <div className="RecentWork__card__media">
            <iframe src="https://www.youtube.com/embed/9Iu3OsRzCzs"></iframe>
          </div>
          <div className="RecentWork__card__text">
            <h2>MERN Chat App</h2>
            <div>
              <LanguageButton language="JavaScript" type="core" />
            </div>
            <p>
              "A hosted chat application that sends and stored messages using
              both a web socket server and a database. Users can create
              accounts, exchange messages, and see who is online. The app is
              mobile responsive and incorporates front-end and back-end
              testing."
            </p>
            <p>Live Demo | GitHub</p>
          </div>
        </article>

        <article className="RecentWork__card">
          <div className="RecentWork__card__media">
            <iframe src="https://www.youtube.com/embed/fwEVP-Mt9zM"></iframe>
          </div>
          <div className="RecentWork__card__text">
            <h2>Arduino Binary Counter</h2>
            <div>
              <LanguageButton language="C++" type="core" />
            </div>
            <p>
              "A hosted chat application that sends and stored messages using
              both a web socket server and a database. Users can create
              accounts, exchange messages, and see who is online. The app is
              mobile responsive and incorporates front-end and back-end
              testing."
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
