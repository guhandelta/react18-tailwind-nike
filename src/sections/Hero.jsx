import { useState } from 'react'
import { shoes, statistics } from '../constants'
import { arrowRight } from '../assets/icons'
import { Button, ShoeCard } from '../components'
import { bigShoe1, bigShoe2, bigShoe3 } from '../assets/images'
import { useEffect } from 'react'

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  useEffect(()=>console.log(bigShoeImg), [bigShoeImg]);
  return (
    <section 
      id="home" 
      className="w-full flex xl:flex-row flex-col justify-center 
      min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w0full max-xl:padding-x pt-28">
        <p className='text-xl font-montserrat text-coral-red'>Our Summer Collection</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            New Arrivals
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>
            Nike
          </span> Shoes
        </h1>
        <p>Checkout the stylist and vibrant Nike's new arrivals, for quality, comfort and innovation in your life.</p>
        <Button label="Shop Now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map(({ label, value }) => (
              <div key={label}>
                <p className='text-4xl font-palanquin font-bold'>{value}</p>
                <p className='leading-7 font-montserrat text-slate-gray'>{label}</p>
              </div>
          ))}
        </div>
      </div>
      <div className='relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img 
          src={bigShoeImg} 
          alt="Shoe Collection" 
          width={610}
          height={500}
          className='relative object-contain z-10 '
        />
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
            {shoes.map((shoe) => (
              <div key={shoe}>
                <ShoeCard 
                  imgURL={shoe} 
                  bigShoeImg={bigShoeImg}
                  changeShoeImg={(shoe) => setBigShoeImg(shoe)}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Hero