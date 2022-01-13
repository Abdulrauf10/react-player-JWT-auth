import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './German.css';
import ReactPlayer from 'react-player';

import Navbar from './Navbar';

const German = () => {
  const history = useHistory();
  const [token] = useState(localStorage.getItem("token"));
  const [currentVideo, setCurrentVideo] = useState(0);

  const germanVideo = ["https://www.youtube.com/watch?v=RuGmc662HDg&t=32s",
                      "https://www.youtube.com/watch?v=S8ukFF6SdGk",
                      "https://www.youtube.com/watch?v=d54ioeKA-jc",
                      "https://www.youtube.com/watch?v=IaerX0Y6wmE",
                      "https://www.youtube.com/watch?v=HCytWm3RC9g",
                      "https://www.youtube.com/watch?v=RElBVZ1Wke0"
                    ];

  useEffect(() => {
    axios
      .get("https://react-player-jwtauth.herokuapp.com/home", {
        headers: { authorization: token },
      })
      .then((response) => {
        console.log(response);       
      })
      .catch((error) => {
        console.log(error);
        history.push("/login");
      });
  });

  const prevVideo = () => {
    if (parseInt(currentVideo, 10) !== 0) {
      setCurrentVideo(currentVideo - 1);
    }
  };

  const nextVideo = () => {
    const countVideo = germanVideo.length - 1;
    if (currentVideo < countVideo) {
      setCurrentVideo(currentVideo + 1);
    }
  };

  return (
    <div className='german'>
      <Navbar/>
      <div className='card_video'>
        <ReactPlayer url={germanVideo[currentVideo]} 
          controls={true}
          width="80%"
          height="50%"
        />
      </div>
      <div className='button_play'>
        <button onClick={() => prevVideo()} className='button_go'>Prev</button>
        <button onClick={() => nextVideo()} className='button_go'>Next</button>
      </div>
    </div>
  )
}

export default German;
