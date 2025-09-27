import React from 'react'
import home from '../assets/HomePage.webp'
import Link from '../Component/Link'
import Practice from './RightArrow'
import Left from './Left'

function Home() {
  return (
    <div>
        <Practice navigatee="/room/nairobi-apparel-district" content={"Enter Nairobi Apparel Store"} top={34} right={8}/>
        <Practice navigatee="/room/closet" content={"Enter the closet"} top={7} right={10}/>
        <Left navigatee="/room/bedroom" content={"Enter the Bedroom"} top={6} right={39}/>
        <img src={home} alt="" className='h-screen lg:w-screen  sm:overflow-x-scroll border-white' />
    </div>
  )
}

export default Home