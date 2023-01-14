import React from 'react';
import Xplor from '../../assets/Xplor.svg';
import Button from '../../components/Button';
import './xplor.css';

const Xplore = () => {
  return (
    <section className='grow-container' id='grow'>
      <div className='strategy-left'>
        <div className='heading'>
          <h1>XPLOR</h1>
          <div className='sub-heading'>
            <span className='o'>O</span>
            <span>NE</span>
          </div>
        </div>
        <p>
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
