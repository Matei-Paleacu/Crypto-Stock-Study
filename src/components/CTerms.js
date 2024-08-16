import React from 'react';

export default function CTerms(props) {
    
    return (
        <div className='terms'>
            <h1 className='term--section'> {props.section} </h1>
            <ul className='term--title--ul'>
                <li className='term--title'> {props.name} </li>
            </ul>
            <p className='term--description'> {props.description}</p>
        </div>
    )
  }