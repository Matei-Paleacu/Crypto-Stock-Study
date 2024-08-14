import React from 'react';

export default function HomePage(props) {
    
    return (
        <div className='home--page'>
            <h1 className='home--quote'> "An investment in knowledge always pays the best interest" ~ Benjamin Franklin </h1>
            <div className='homeImg--container'>
                <img src={`../images/ST.png`} className="homeImg--image" alt="chart"/>
            </div>
        </div>
    )
  }
  /*
<div className='homeImg--container'>
    <img src={`../images/BL-ch.png`} className="homeImg--image" alt="chart"/>
</div>
  */