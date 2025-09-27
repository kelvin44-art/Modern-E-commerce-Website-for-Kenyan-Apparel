import React from 'react'

function NavBar() {
  return (
    <div className='absolute w-full'> 
        <nav className='flex justify-between p-5 text-white font-extrabold'>
            <div>
                <ul className='flex gap-4'>
                    <li>Home</li>           
                </ul>
            </div>
            <h2>Online Waikiki</h2>
            <div>
                <ul className='flex gap-4'>
                    <li>Cart ( 0 )</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default NavBar