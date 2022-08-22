import React from 'react';
import Resume from '../../assets/Resume.pdf';

const CTA = () => {
  return (
    <div className='cta'>
      <a href={Resume} download className='btn'>
        Download Resume (PDF)
      </a>
      <a
        href='https://drive.google.com/file/d/1G2sljoLysQFwrOEo_M_NGFenLvQdbWgk/view?usp=sharing'
        target='_blank'
        rel='noreferrer'
        className='btn'
      >
        Download Resume (Google Drive)
      </a>
      <a href='#contact' className='btn btn-primary'>
        Talk To Me
      </a>
    </div>
  );
};

export default CTA;
