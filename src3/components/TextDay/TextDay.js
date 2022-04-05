import React from 'react'
import './TextDay.css'

function TextDay(props) {
  return (
    <div className='TextDay'>
        {props.day}
    </div>
  )
}

export default TextDay