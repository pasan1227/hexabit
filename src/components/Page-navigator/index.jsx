import React from 'react';
import { Link } from 'react-scroll';
import chainIcon from '../../assets/icon_chain.svg';
import mediaIcon from '../../assets/icon_media.svg';
import strategyIcon from '../../assets/icon_strategy.svg';
import xplorIcon from '../../assets/icon_xplor.svg';
import './pageNavigator.css';

const pages = [
  {
    id: 'grow',
    icon: strategyIcon,
    alt: 'icon strategy',
  },
  {
    id: 'media',
    icon: mediaIcon,
    alt: 'icon media',
  },
  {
    id: 'chain',
    icon: chainIcon,
    alt: 'icon chain',
  },
  {
    id: 'xplor',
    icon: xplorIcon,
    alt: 'icon xplor',
  },
];

function SliderDots() {
  return (
    <div className='slider__dots'>
      <a href='#' className='slider__indicator slider__indicator--right'></a>
      {pages.map((page, index) => (
        <Link
          key={page.id}
          to={page.id}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={`slider__dot dot-${index}`}
          data-pos={index}>
          <div style={{ alignSelf: 'center' }}>
            <img
              src={page.icon}
              alt={page.alt}
              style={{ width: '68px', height: '68px' }}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default SliderDots;