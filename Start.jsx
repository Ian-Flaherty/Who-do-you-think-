import React from 'react'
import axios from 'axios'
import MusicVideo from './components/MusicVideo';
// import { useEffect, useState } from 'react';

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_Key;
const URL = `https://api.airtable.com/v0/${airtableBase}/ClassMates`;
const URL2 = `https://api.airtable.com/v0/${airtableBase}/Questions`;
// console.log(airtableBase);
// console.log(airtableKey);

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
},
};
// console.log(URL);
export default function Start() {


  axios.get(URL, config);
  axios.get(URL2, config);
  return (
    <video 
    autoPlay
    loop
    muted
    style= {{
      position: 'absolute',
      width: '100%',
      left: '50%',
      top: '50%',
      height: '100%',
      objectFit: 'cover',
      transform: 'translate(-50%, -50%)',
      zIndex: '-1'
    }}
  >
  <source src={Musicvideo} type='video/mp4'/>
  
  </video>
    

  )
    
  
}

