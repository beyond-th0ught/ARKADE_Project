import React from 'react'
import Logo from './assets/13.png'

export default function navbar() {
    const data=[
        {name:"Home"},{name:"About Us"},{name:"Our Projects"},{name:"Investors"},{name:"Careers"},{name:"Contact Us"}
    ]
  return (
    <div className=''>
        <div className=' h-20 text-sm flex justify-center items-center  '>
            <div className=' flex  items-center mr-10'>
                <img src={Logo} className="w-[256px] h-[65px]" />
            </div>
            <div className='flex text-md gap-3 items-center font-semibold'>
                <div className=' flex gap-2  '>
                    {data.map((val,index)=>{
                        return(
                            <label className='hover:cursor-pointer mr-8 shadow-sm break-all hover:text-[#eb870d]'>
                            {val.name}
                            </label>
                        )
                    })}
                </div>
                <div className='bg-[#eb870d] py-2 px-5 ml-2 hover:cursor-pointer'>
                    Schedule a site visit 
                </div>

            </div>
        </div>
    </div>
  )
}