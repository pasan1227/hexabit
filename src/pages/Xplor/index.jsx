import React from 'react';
import Xplor from '../../assets/Xplor.svg';
import Button from '../../components/Button';
import SliderDots from '../../components/Page-navigator';
import './xplor.css';

const Xplore = () => {
  return (
    <section className='grow-container' id='xplor'>
      <SliderDots />
      <div className='strategy-left'>
        <div className='heading'>
          <h1>XPLOR</h1>
          <div className='sub-heading'>
            <p className='hex' />
            <span>NE</span>
          </div>
        </div>
        <p className='description'>
          Learn the technologies changing our <br /> future + become certified.
          <br /> Blockchain, Crypto, NFTs, Metaverse, AI.
        </p>
        <Button icon='brain' text='START LEARNING' />
      </div>
      <div className='strategy-right'>
        <div className='image-xplor'>
          <img src={Xplor} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Xplore;
