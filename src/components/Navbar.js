import React from 'react';

export default function Navbar(props){
    return (
      <nav >
            <img src="../images/bitcoin-btc-logo.png" className="nav--logo" alt='logo'/>
            <p className="nav--name"> Company Name </p>
            <select className="drop--select" defaultValue={"None"} onClick={(event) => props.page(event.target.value)}> 
                <option value="Home" >Home</option>
                <option value="Crypto Terms">Crypto Terms</option>
                <option value="Stock Terms">Stock Terms</option>
                <option value="Chart Patterns">Chart Patterns</option>
            </select>
      </nav>
    )
  }