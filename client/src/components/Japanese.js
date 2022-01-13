import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';
import './Japanese.css';

import Navbar from './Navbar';

const Japanese = () => {
  const history = useHistory();
  const [token] = useState(localStorage.getItem("token"));
  const [currentVideo, setCurrentVideo] = useState(0);

  const germanVideo = ["https://www.youtube.com/watch?v=NwZzGbzi_jY&t=1s",
                      "https://www.youtube.com/watch?v=B_55oW65H4M",
                      "https://www.youtube.com/watch?v=Bgma6GGH748&t=1s",
                      "https://www.youtube.com/watch?v=4IORgVTMHGo&t=1s",
                      "https://www.youtube.com/watch?v=ExVgzH7aY8o&t=1s",
                      "https://www.youtube.com/watch?v=qtJea9Bnc4g&t=1s"
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
    <div className='japanese'>
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

export default Japanese;
