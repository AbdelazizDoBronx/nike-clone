import { Menu } from 'lucide-react'
import React from 'react'

const Button = ({label}) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red text-white '>
      {label}
    </button>
  )
}

export default Button