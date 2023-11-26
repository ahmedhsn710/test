import Heading from '../heading/Heading';

import React, { useState } from 'react';
import './videopage.css'

const Videopage = () => {
  const [videoLink, setVideoLink] = useState('');

  const handleVideoLinkChange = (e) => {
    setVideoLink(e.target.value);
  };

  return (
    <div style={{ backgroundColor: '#f7f7f7', paddingTop: '40px', paddingBottom: '70px'}}>
      <Heading title="Our Vision" />
      <div className="video-container">
        <div className="video-wrapper">
          <iframe
            title="YouTube Video"
            width="400"
            height="200"
            src="https://www.youtube.com/embed/j1Lpo20_8Js&amp;mute=1?autoplay=1&showinfo=0&controls=0&autohide=1&rel=0&loop=1&playlist=j1Lpo20_8Js&amp;mute=1&modestbranding=1&wmode=opaque"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className="video-info">
          <h1>Video Information</h1>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Nullam gravida arcu eget justo</li>
            <li>Fusce suscipit ex eget arcu</li>
          </ul>
        </div>
      </div>
    </div>
  );
};



export default Videopage;
