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
              <small>25 Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Very happy globally!</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
          </div>

          <p>
            The devil went down to Georgia, he was lookin' for a soul to steal.
            He was in a bind 'cause he was way behind and lookin to make a deal.
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
