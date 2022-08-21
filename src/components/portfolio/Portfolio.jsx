import React from 'react';
import './portfolio.css';
import IMGML from '../../assets/monolithlandingss_dtop.png';
import IMGCSS from '../../assets/cssmemgamess.png';
import IMGBF from '../../assets/findmeabeerss_dtop.png';

const projects = [
  {
    id: 1,
    image: IMGBF,
    title: 'FindMeABeer',
    github: 'https://github.com/ThomasStrong/beer-finder',
    demo: 'https://thomasstrong.github.io/beer-finder/',
  },
  {
    id: 2,
    image: IMGML,
    title: 'Monolith Lapidary',
    github: 'https://github.com/ThomasStrong/Monolith_Lapidary',
    demo: 'https://thomasstrong.github.io/Monolith_Lapidary/',
  },
  {
    id: 3,
    image: IMGCSS,
    title: 'CSS Memory Game',
    github: 'https://github.com/ThomasStrong/CSS_Memory_Game',
    demo: 'https://thomasstrong.github.io/CSS_Memory_Game/',
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {projects.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>

              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a
                  href={github}
                  className='btn'
                  target='_blank'
                  rel='noreferrer'
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className='btn btn-primary'
                  target='_blank'
                  rel='noreferrer'
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
