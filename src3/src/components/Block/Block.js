import React from 'react'
import DayBlock from '../DayBlock/DayBlock'
import DayBlockActive from '../DayBlockActive/DayBlockActive'
import NamesClasses from '../NamesClasses/NamesClasses'
import './Block.css'


function Block(props) {
  return (
    < >
       <div className='Block'>
        <NamesClasses numberClass={props.numberOfClass} />
        <DayBlock />
        <DayBlock />
        <DayBlockActive />
        <DayBlock />
        <DayBlock />
        </div> 
    </>
    
  )
}

export default Block