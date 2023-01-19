import FullPage, { FullpageSection, FullPageSections } from '@ap.cx/react-fullpage'
import React from 'react'
import { Footer } from 'react-fullpage'
import Chain from './pages/Chain'
import Earn from './pages/Earn'
import Grow from './pages/Grow'
import Home from './pages/Home'
import Media from './pages/Media'
import Newsletter from './pages/Newsletter'
import Podcast from './pages/Podcast'
import Xplore from './pages/Xplor'

const FullPageScroll = () => {
  return (
    <FullPage>
      <FullPageSections>
        <FullpageSection >
          <Home />
        </FullpageSection>
        <FullpageSection >
          <Grow />
        </FullpageSection>
        <FullpageSection >
          <Media />
        </FullpageSection>
        <FullpageSection >
          <Chain />
        </FullpageSection>
        <FullpageSection >
          <Xplore />
        </FullpageSection>
        <FullpageSection >
          <Earn />
        </FullpageSection>
        <FullpageSection >
          <Newsletter />
        </FullpageSection>
        <FullpageSection >
          <Podcast />
        </FullpageSection>
        <FullpageSection >
          <Footer />
        </FullpageSection>
      </FullPageSections>
    </FullPage>
  )
}

export default FullPageScroll