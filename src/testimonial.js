import React from 'react'
import Img1 from './assets/09.png';

function Testimon() {
  return (
    <div className='w-full h-full relative bg-red-600 h-[28rem]'>
        <img src={Img1} className="w-full h-full" />
        <div className='absolute text-gray-400 w-full flex justify-between top-[50%] px-[12%] text-5xl font-bold'> 
            <div> {"<"} </div>
            <div>{">"}</div>
        </div>
        <div className='absolute text-white w-full flex flex-col justify-center items-center top-[35%] px-[15%]'> 
            <div className='mb-6 text-3xl font-bold flex'><div className='text-orange-400 mr-2'>Our</div> Testimonial</div>
            <div className='flex flex-col items-center text-sm mb-16 text-stone-300'>
                <p>Praesent volutpat ut nisl inlit hendrerit. Vestibulum antem ipsum</p>
                <p>sul primis in faucibus orci luctus et ultrices posible uere cubilia Curaemil mil Etiam porttitor, lacus in luctus</p>
                <p>mun Vestibulum antem ipsum isul primis in sco</p>
            </div>
            <div className='flex'><div className='text-orange-400'>Logan Cee</div> - CEO at Typo INC</div>
        </div>
    </div>
  )
}

export default Testimon