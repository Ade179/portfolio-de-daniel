import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qttdtzj', 'template_skdcxmo', form.current, 'wARWim46nKplYsc9u')
      .then((result) => {
        console.log(result.text);
        setDone(true);
        form.current.reset(); // Clear form inputs
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact Me</span>
          <div className="blur s-blur1" style={{ background: '#ABF1FF94' }} />
        </div>
      </div>

      <div className="c-right">
        <form action="submit" ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder="Name" required />
          <input type="email" name="user_email" className="user" placeholder="Email" required />
          <textarea name="message" className="user" placeholder="messsage" required />
          <input type="submit" value="Send" className="button" />
          <span>{done && 'Thanks for reaching out to me'}</span>
          <div className="blur c-blur1" style={{ background: 'var(--purple)' }} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
