import React from 'react';
import './footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        Thomas Strong
      </a>

      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a
          href='https://www.linkedin.com/in/trstrong/'
          target='_blank'
          rel='noreferrer'
        >
          <BsLinkedin />
        </a>
        <a
          href='https://github.com/ThomasStrong'
          target='_blank'
          rel='noreferrer'
        >
          <FaGithub />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Thomas Strong All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
