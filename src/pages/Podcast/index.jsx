import React from 'react';
import kim from '../../assets/kim.svg';
import podcastlogo from '../../assets/news/podcastlogo.svg';
import nick from '../../assets/nick.svg';
import rayhaan from '../../assets/rayhaan.svg';
import ButtonTwo from '../../components/Button-2';
import Youtube from '../../components/Youtube';
import './podcast.css';

const Podcast = () => {
  return (
    <section className='podcast-container' id='podcast'>
      <div className='podcast-left'>
        <div className='podcast-left-top'>
          <div className='podcast-left-top-content'>
            <img src={podcastlogo} alt='' />
            <h1>
              YOUR GO-TO
              <br />
              WEB3 PODCAST
            </h1>
          </div>
          <div className='button'>
            <ButtonTwo text='BE A GUEST' icon='microphone-lines' />
          </div>
        </div>
        <div className='podcast-left-bottom'>
          <div className='image-left'>
            <img src={rayhaan} alt='' />
          </div>

          <div className='image-center'>
            <img className='' src={nick} alt='' />
          </div>

          <div className='image-right'>
            <img src={kim} alt='' />
          </div>
        </div>
      </div>
      <div className='podcast-right'>
        <div className='youtube'>
          <Youtube />
        </div>
        <ButtonTwo className='youtube-button' text='SUBSCRIBE' icon='youtube' />
      </div>
    </section>
  );
};

export default Podcast