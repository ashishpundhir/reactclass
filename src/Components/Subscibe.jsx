import { buttonBaseClasses } from '@mui/material'
import React from 'react'

function Subscibe() {

let random = Math.random() * 10;
let myname = 'ashish';
let degree = () => {return ('btech')};

  return (
    <div>
      <h1>Hello i am {myname} and i'm a student of {degree()} </h1>
    <button className='btn btn-primary'>subscibe</button>
    <h2>And the number is {Math.round (random)}</h2>
    </div>
  )
}

export default Subscibe