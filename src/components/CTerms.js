import React from 'react';

export default function CTerms(props) {
    
    return (
        <div className='terms'>
            <h1 className='term--section'> {props.section} </h1>
            <p className='term--title'> {props.name} </p>
            <p className='term--description'> {props.description}</p>
        </div>
    )
  }