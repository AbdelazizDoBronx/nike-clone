import React from 'react'
import {headerLogo} from '../assets/images'
import {navLinks} from '../constants'
import {hamburger} from '../assets/icons'
const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="logo" width={126} height={29} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item,idx)=>(
            <li className='leading-normal font-montserrat text-lg text-slate-gray' key={idx}>{item.label}</li>
          ))}
        </ul>
          <div>
             <img className='hidden xl:flex max-lg:block' src={hamburger} alt="burger icon"  width={20}/>
          </div>
      </nav>
    </header>
  )
}

export default Nav