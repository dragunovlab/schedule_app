import React from 'react'
import './Bell.css'
import svg from './Bell.svg'

function Bell() {
  return (
    <div className='Bell'>
    <img className='Bell__img' src={svg} alt="" />
    </div>
  )
}

export default Bell