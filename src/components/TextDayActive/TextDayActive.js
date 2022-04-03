import React from 'react'
import './TextDayActive.css'

function TextDay(props) {
  return (
    <div className='TextDayActive'>
        {props.day}
    </div>
  )
}

export default TextDay