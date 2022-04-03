import React from 'react'
import ItemsBlock from '../ItemsBlock/ItemsBlock'
import Line from '../LineGray/LineGray'
import TextDay from '../TextDay/TextDay'
import './DayBlock.css'

function DayBlock() {
  return (
    <div className='DayBlock'>
    <TextDay day='ПН'/>
    <ItemsBlock />
    <Line />
    <ItemsBlock />
    <Line />
    <ItemsBlock />
    <Line />
    </div>
    
  )
}

export default DayBlock