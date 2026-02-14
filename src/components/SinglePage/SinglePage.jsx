import React from 'react';
import './singlePage.css';

import soundWave from '../../assets/media/soundWave.svg';

import Card from '../Card/Card';

import info from '../../assets/information/informationAll.json'

const SinglePage = () => {
  const singleInfo = info[0]
  console.log(singleInfo)
  
  return (
    singleInfo ? <>
      {
        <div className="single-page page">
          <div className="empty"></div>
          <Card singleInfo={singleInfo} />
          <p className="todays-date">{singleInfo.date}</p>
          
          <div className="song-container">       
            <div className="controls-container">
              <div className='link-container'>
                <a href={singleInfo.songLink} target='blank'>
                  <img src={soundWave} alt="" />
                </a>
              </div>
              <div className="song-flex-container">
                <p className="song-title">{singleInfo.song}</p>
                <p className="instructions">click the soundwave to open the song</p>
              </div>
            </div>
          </div>
        </div>
      }
    </> : <> </>
  )
}

export default SinglePage