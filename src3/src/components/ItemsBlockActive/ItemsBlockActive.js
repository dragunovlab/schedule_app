import React from 'react'
import ItemWhite from './ItemWhite/ItemWhite'
import './ItemsBlockActive.css'
import ItemGray from './ItemGray/ItemGray'

function ItemsBlockActive() {
  return (
    <div className='ItemsBlockActive'>
        <ItemWhite />
        <ItemGray />
        <ItemWhite />
        <ItemGray />
        <ItemWhite />
        <ItemGray />
        <ItemWhite />
        <ItemGray />
    </div>
    
  )
}

export default ItemsBlockActive