import './youtube.css'

import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

const Video = () => {
    const [width, setWidth] = useState(null);

    useEffect(() => {
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const updateWidth = () => {
        setWidth(window.innerWidth);
    }

    const opts = {
        playerVars: {
            autoplay: 1,
        },
    }

    const onReady = (e) =>{
      // access to player in all event handlers via event.target
      e.target.pauseVideo()
    }

    if(width < 600) {
        opts.height = '200';
        opts.width = '300';
    } else {
        opts.height = '390';
        opts.width = '640';
    }

    return (
        <div className="video-container">
            <YouTube
                videoId="2g811Eo7K8U"
                opts={opts}
                onReady={onReady}
            />
        </div>
    );
}

export default Video;
