import React from 'react'
import img1 from './assets/08.png'

function Investor() {
  return (
    <div className='flex items-center justify-between h-[28rem]'>
        <div className=' h-full w-[40%] bg-green flex flex-col justify-center ml-[11%]'>
            <div className='flex mb-5'>
                <div className='line border-l-[8px] border-[#EB870C] h-[6.3rem]'></div>
                <div className='ml-2'>
                    <div className='mb-[5px] tracking-wide font-semibold text-[85%] text-[#858585]'>A R K A D E</div>
                    <div className='mb-1 text-4xl font-bold'>Life Investors,</div>
                    <div className='text-2xl font-semibold flex'><div>rather than developers</div> <div className='text-[#EB870C] text-[2.5rem] font-bold'> . </div></div>
                </div>
            </div>
            <div className='text-[12px] mb-5'>
                All our endeavours are dear to us. Some, however, are closest to our heart. They form a source of our pride and are perfect examples of why we call ourselves Life Investors. These are filled with life, to the brim.
            </div>
            <div className=' bg-[#EB870C] p-2 w-[25%] font-bold text-white text-center text-[12px]'>
                Take a look
            </div>
        </div>
        <div className='relative bg-red h-full w-[50%] flex items-center'>
            <div className='border-2 border-[#EB870C] w-[70%] h-[60%] ml-[11%]'> </div>
            <img src={img1} className="w-[70%] h-[60%] absolute left-[7.9%] top-[23.5%]" />
        </div>
    </div>
  )
}

export default Investor