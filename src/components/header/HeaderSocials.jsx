import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaFreeCodeCamp } from 'react-icons/fa';
import { SiExercism } from 'react-icons/si';
import { SiPluralsight } from 'react-icons/si';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
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
      <a
        href='https://app.pluralsight.com/profile/thomas-strong'
        target='_blank'
        rel='noreferrer'
      >
        <SiPluralsight />
      </a>
      <a
        href='https://www.freecodecamp.org/FrothyDev'
        target='_blank'
        rel='noreferrer'
      >
        <FaFreeCodeCamp />
      </a>
      <a href='https://exercism.org/' target='_blank' rel='noreferrer'>
        <SiExercism />
      </a>
    </div>
  );
};

export default HeaderSocials;
