import React from 'react'

const StyleBtn = () => {

const App = document.querySelector('.App')

function changeStyle() {
  App.style.background = "red"
}

  return (
    <div onClick={changeStyle()}>>StyleBtn</div>
  )
}

export default StyleBtn