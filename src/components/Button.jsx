import React from 'react'

const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-2 border border-coral-red font-montserrat leading-none text-lg text-white rounded-full bg-coral-red"> 
        {label}!
        <img 
            src={iconURL} 
            alt={label} 
            className="ml-2 rounded-full 2-5 h-5" 
        />
    </button>
  )
}

export default Button