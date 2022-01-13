import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';
import './Russian.css';

import Navbar from './Navbar';

const Russian = () => {
  const history = useHistory();
  const [token] = useState(localStorage.getItem("token"));
  const [currentVideo, setCurrentVideo] = useState(0);

  const germanVideo = ["https://www.youtube.com/watch?v=R9S1dzNk4mI&t=3s",
                      "https://www.youtube.com/watch?v=jmbmVEOgF5Y&t=2s",
                      "https://www.youtube.com/watch?v=RpvdHEaludA&t=1s",
                      "https://www.youtube.com/watch?v=lmLMEg5yo2w&t=2s",
                      "https://www.youtube.com/watch?v=_JTmDwd8-zI&t=2s"
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
    <div className='russian'>
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

export default Russian
