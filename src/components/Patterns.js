import React from 'react';

export default function Patterns(props) {
    
    return (
        <div className='patterns'>
            <h1 className='term--title--pattern'> {props.name} </h1>
            <p className='term--description' dangerouslySetInnerHTML={{ __html: props.description.replace(/\n/g, '<br/> <br/>') }} />
            <div className='chart--container'>
                <img src={`../images/${props.img}`} className="chart--image" alt="chart"/>
            </div>
            
        </div>
    )
  }