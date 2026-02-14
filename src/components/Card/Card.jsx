import React from 'react';
import { useState } from 'react';
import './card.css';

const Card = ({singleInfo}) => {

  const [isOpen, setIsOpen] = useState(false);

  const onClickOpen = () => {
    setIsOpen(true)
  }

  const onClickClose = () => {
    setIsOpen(false)
  }


  return (
    <>
      <div className="envelope-wrapper">
        <div className={`envelope ${isOpen ? 'open' : 'close'}`} onClick={onClickOpen}>

            <div className="front flap"></div>
            <div className="front pocket"></div>

            <div className="letter">
              <p className="words line1">Sayuri,</p>
              <p className="words line2">{singleInfo.message}</p>
              <p className="words line-mid">{'Happy Valentines Day <3'}</p>
              <p className="words line3">Love,</p>
              <p className="words line4">Your Dami</p>
            </div>

            <div className="hearts">
              <div className="heart a1"></div>
              <div className="heart a2"></div>
              <div className="heart a3"></div>
              <div className="heart a4"></div>
            </div>
        </div>
      </div>

      <div className="reset">
        <button className="open" onClick={onClickOpen}>Open card</button>
        <button className="reset" onClick={onClickClose}>Close card</button>
      </div> 
    </>
  )
}

export default Card