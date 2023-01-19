import FullPage, { FullpageSection, FullPageSections , } from '@ap.cx/react-fullpage'
import React from 'react'
<<<<<<< HEAD
import Navbar from './components/Navbar'
=======
>>>>>>> 4e24a0076900f53e876e7eb488b49880c7b63248
import Chain from './pages/Chain'
import Earn from './pages/Earn'
import Footer from './pages/Footer'
import Grow from './pages/Grow'
import Home from './pages/Home'
import Media from './pages/Media'
import Newsletter from './pages/Newsletter'
import Podcast from './pages/Podcast'
import Xplore from './pages/Xplor'

const FullPageScroll = () => {
  return (
    <FullPage>
      <Navbar/>
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