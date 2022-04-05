import React from 'react'
import ItemsBlock from '../ItemsBlock/ItemsBlock'
import LineActive from '../LineActive/LineActive'
import TextDayActive from '../TextDayActive/TextDayActive'
import './DayBlockActive.css'

function DayBlockActive() {
  return (
    <div className='DayBlockActive'>
    <TextDayActive day='СР'/>
    <ItemsBlock />
    <LineActive />
    <ItemsBlock />
    <LineActive />
    <ItemsBlock />
    <LineActive />
    </div>
    
  )
}

export default DayBlockActive