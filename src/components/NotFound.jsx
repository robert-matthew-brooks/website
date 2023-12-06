import Title from './Title';
import Button from './Button';
import './NotFound.css';

export default function NotFound() {
  return (
    <section id="NotFound">
      <div id="NotFound__inner" className="inner-section">
        <Title>Page Not Found :(</Title>

        <Button link="/">Back Home</Button>
      </div>
    </section>
  );
}
