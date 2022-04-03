import React from 'react'
import Class from './Class/Class'
import './NamesClasses.css'

function NamesClasses(props) {
  return (
    <div className='names-classes'>
      <Class name={`${props.numberClass}A`} />
      <Class name={`${props.numberClass}Б`} />
      <Class name={`${props.numberClass}В`} />
    </div>
    
  )
}

export default NamesClasses