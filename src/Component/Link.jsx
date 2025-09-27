import React, { useState } from 'react'
import arrow from '../assets/arrowHead1.png'

function Link({rightPosition, TopPos, section}) {

    const [showTitle, setShowTitle] = useState(false)
    const handleMouseEnter = () =>{
        setShowTitle(true)
    }
    const handleMouseLeave = () =>{
        setShowTitle(false)
    }

  return (
    <div
     style={{position: 'absolute', right: `${rightPosition}%`, top: `${TopPos}%`}}
     className={`flex items-center showndisp  ${showTitle? 'flex  border-2 border-white  px-2 rounded-2xl mt-3 mb-4 w-45': ""} `}>
        <p style={showTitle? {visibility: 'visible', fontWeight: 'bolder', color: 'white'} : {visibility: 'hidden'} }>{section}</p>
        <img src={arrow} className='w-4 h-10 w-10 ml-6 font-bold' onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}/>    
    </div>
  )
}

export default Link