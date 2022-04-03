import React from 'react'
import ItemWhite from './ItemWhite/ItemWhite'
import './ItemsBlock.css'
import ItemGray from './ItemGray/ItemGray'
import ItemTitle from './ItemTitle/ItemTitle'

function ItemsBlock() {
  return (
    <div className='ItemsBlock'>
        <ItemTitle />
        <ItemWhite />
        <ItemGray />
        <ItemWhite />
        <ItemGray />
        <ItemWhite />
        <ItemGray />
        <ItemWhite />
    </div>
    
  )
}

export default ItemsBlock