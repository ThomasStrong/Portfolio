import React from 'react';
import './portfolio.css';
import IMGML from '../../assets/monolithlandingss_dtop.png';
import IMGCSS from '../../assets/cssmemgamess.png';
import IMGBF from '../../assets/findmeabeerss_dtop.png';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container __portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMGML} alt='monolith lapidary' />
          </div>

          <h3>Monolith Lapidary</h3>
          <a
            href='https://github.com/ThomasStrong/Monolith_Lapidary'
            className='btn'
            target='_blank'
          >
            GitHub
          </a>
          <a
            href='https://thomasstrong.github.io/Monolith_Lapidary/'
            className='btn btn-primary'
            target='_blank'
          >
            Live Demo
          </a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMGBF} alt='find me a beer' />
          </div>

          <h3>FindMeABeer</h3>
          <a
            href='https://github.com/ThomasStrong/beer-finder'
            className='btn'
            target='_blank'
          >
            GitHub
          </a>
          <a
            href='https://thomasstrong.github.io/beer-finder/'
            className='btn btn-primary'
            target='_blank'
          >
            Live Demo
          </a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMGCSS} alt='css memory game' />
          </div>

          <h3>CSS Memory Game</h3>
          <a
            href='https://github.com/ThomasStrong/CSS_Memory_Game'
            className='btn'
            target='_blank'
          >
            GitHub
          </a>
          <a
            href='https://thomasstrong.github.io/CSS_Memory_Game/'
            className='btn btn-primary'
            target='_blank'
          >
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
