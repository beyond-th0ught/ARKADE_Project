import React from 'react'
import First from './assets/01.png'

export default function home() {
  return (
    <div
        class="bg-cover h-[766px]"
        style={{
          backgroundImage: `url(${First})`,
          backgroundSize: "cover",
          height: "88vh",
          color: "#f5f5f5"
        }}
      >
        <div className='w-[632px] h-[183px] relative text-white font-extrabold text-4xl left-[200px] top-[195px]'>
        <div className='absolute whitespace-pre-wrap gap-8'>
            
             <p className='text-[#eb870d] font-normal leading-8  text-sm'>
             B U I L D   A N Y T H I N G   W I T H  U S
           
             </p>
             <p className=' leading-8 py-4 '>


             <p>SED UT PERSPICIATIS </p>
             <p className='pt-4 '>UNDE OMNIS ISTE NATUS</p>
             </p>
            <button className='text-white bg-[#eb870d]  py-2 px-8  text-xs font-normal'>
            DESCOVER MORE
            </button>
            
        </div>
        </div>
      </div>
  )
}