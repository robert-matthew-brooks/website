import { useState } from 'react';
import Title from './Title';
import './Contact.css';
import Button from './Button';

export default function Contact() {
  const [isSent, setIsSent] = useState(false);

  return (
    <section id="Contact">
      <div
        id="Contact__inner"
        className="inner-section"
        onClick={() => {
          setIsSent(!isSent);
        }}
      >
        <Title>Contact</Title>

        {!isSent && (
          <form id="Contact__form" method="post" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" required placeholder="First Name" />
            <input type="text" required placeholder="Last Name" />
            <input type="email" required placeholder="Email Address" />
            <textarea required placeholder="How can I help you?"></textarea>
            <Button type="submit">Email Me</Button>
          </form>
        )}

        {isSent && <p>Message sent, thank you.</p>}
      </div>
    </section>
  );
}
