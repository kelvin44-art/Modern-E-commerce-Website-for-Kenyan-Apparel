import React, { useState } from 'react'
import '../Pages/practice.css'
import image from '../assets/panel.png'
import { Link } from 'react-router-dom'

function Left({top, right, content, navigatee}) {
  return (
    <div
      className="parent flex"
      style={{ position: 'absolute', top: `${top}%`, right: `${right}%`, gap: '10px' }}
    >
      <img src={image} alt="" className="rounded-full h-8 w-8 py-1 px-1 border-2" />
      <Link to={navigatee} className="child">
        {content}
      </Link>
    </div>
  )
}

export default Left