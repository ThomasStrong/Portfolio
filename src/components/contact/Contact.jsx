import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlinePhone } from 'react-icons/ai';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { TbArrowBigRightLines } from 'react-icons/tb';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_h1y3dhh',
        'template_xs4h9oy',
        form.current,
        'M9JhzsMf14dkHKowO'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>strongertoms@gmail.com</h5>
            <a
              href='mailto:strongertoms@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              Send a Message
            </a>
          </article>
          <article className='contact__option'>
            <AiOutlinePhone className='contact__option-icon' />
            <h4>Phone</h4>
            <h5>720.304.5826</h5>
            <a href='sms:7203045826&body=message'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <TbArrowBigRightLines className='contact__option-icon' />
            <h4>Send a Quick Message</h4>
            <h5>Fill out the form</h5>
            <a href='#nameInput'>Begin</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            id='nameInput'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
            required
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
