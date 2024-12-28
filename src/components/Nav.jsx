import { Menu } from 'lucide-react'
import React from 'react'

const Nav = () => {
  return (
    <header className='p-5'>
      <nav className='flex justify-between items-center'>
        <a href="/">
          <h2 className='text-3xl font-bold leading-10 text-orange-400'>Nike</h2>
        </a>
        <ul className='hidden md:flex gap-10 justify-center items-center text-sm text-neutral-500'>
          <li>Home</li>
          <li>About Us</li>
          <li>Products</li>
          <li>Contact Us</li>
        </ul>
        <Menu className='block md:hidden'/>
      </nav>
    </header>
  )
}

export default Nav