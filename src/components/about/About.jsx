import React from 'react';
import './about.css';
import ME from '../../assets/me.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='aobut__me-image'>
            <img src={ME} alt='me' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>15+ years Customer Service</small>
              <small>15 years Customer Service</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Very happy globally!</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects/Research</h5>
              <small>Published Research</small>
              <small>Authorship & Collaboration</small>
            </article>
          </div>

          <p>
            I am a passionate problem-solver, husband, and father. Adventures
            with my family are my favorite past-time. When not travelling, I can
            be found hiking, gaming with friends, or building computers. I am
            also an avid rockhound, love to sing, and have done voice-overs for
            multiple media.
            <br />I have been interested in code since my high school computer
            programming class. Working with Visual Basic and building my own
            small programs was the first peek into the potential of creation. My
            life then became a series of if-then statements - I saw them
            everywhere. Working with POS systems in restaurants, using software
            to determine elemental composition of unknown materials through
            spectral analysis, creating a spreadsheet to interpolate draw
            distances for contour mapping, building complex maps and data
            visualizations with GIS, etc. I am excited to pursue a development
            career while continuing to learn and grow my coding skills.
          </p>

          <a href='#contact' className='btn btn-primary'>
            Talk to Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
