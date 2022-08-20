import React from 'react';
import './nav.css';
import { GoHome } from 'react-icons/go';
import { FaRegUser } from 'react-icons/fa';
import { BiBook } from 'react-icons/bi';
import { VscBriefcase } from 'react-icons/vsc';
import { TiMessages } from 'react-icons/ti';
import { useState } from 'react';
import ReactTooltip from 'react-tooltip';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <ReactTooltip delayShow={800} />
      <a
        href='#'
        data-tip='Home'
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
        rel='noreferrer'
      >
        <GoHome />
      </a>
      <a
        href='#about'
        data-tip='About'
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
        rel='noreferrer'
      >
        <FaRegUser />
      </a>
      <a
        href='#experience'
        data-tip='Experience'
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
        rel='noreferrer'
      >
        <BiBook />
      </a>
      <a
        href='#portfolio'
        data-tip='Portfolio'
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
        rel='noreferrer'
      >
        <VscBriefcase />
      </a>
      <a
        href='#contact'
        data-tip='Contact'
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
        rel='noreferrer'
      >
        <TiMessages />
      </a>
    </nav>
  );
};

export default Nav;
