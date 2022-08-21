import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlinePhone } from 'react-icons/ai';

const Contact = () => {
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
            <a href='mailto:strongertoms@gmail.com' target='_blank'>
              Send a Message
            </a>
          </article>
          <article className='contact__option'>
            <AiOutlinePhone className='contact__option-icon' />
            <h4>Phone</h4>
            <h5>720.304.5826</h5>
            {/* <a href='mailto:strongertoms@gmail.com'>Send a Message</a> */}
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action=''>
          <input
            type='text'
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
