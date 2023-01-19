import React from 'react';
import chain from '../../assets/chain.svg';
import Button from '../../components/Button';
import SliderDots from '../../components/Page-navigator';
import './chain.css';

const Chain = () => {
  return (
    <section className='grow-container' id='chain'>
      <div className='strategy-left'>
        <SliderDots />
        <div className='strategy-left-content'>
          <div className='heading'>
            <h1>CHAIN</h1>
            <div className='sub-heading'>
              <p className='hex' />
              <span>NE</span>
            </div>
          </div>
          <p className='description'>
            Become a player by launching your <br /> blockchain-based project in
            30-90 days. <br />
            Finally, a development team you can trust.
          </p>
          <Button icon='wrench' text='GET ON CHAIN' />
        </div>
      </div>
      <div className='strategy-right'>
        <div className='image-chain'>
          <img src={chain} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Chain;
