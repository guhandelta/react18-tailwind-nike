import { star } from '../assets/icons'
import React from 'react'

const PopularProduct = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-280px h-280px" />
      <div className="mt-8 flex justify-start gap-2 5">
        <img src={star} width={24} height={24} alt="" />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
      </div>
      <h3 className="mt-2 text-xl leding-normal font-montserrat font-semibold">{name}</h3>
      <p className="mt-2 font-montserrat font-semibold text-coral-red text-2xl leading-normal">{price}</p>
    </div>
  )
}

export default PopularProduct