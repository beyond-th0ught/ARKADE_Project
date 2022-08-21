import React from 'react'
import img1 from './assets/12.png'

function Footer() {

    const data2 = ["About Us", "Our Projects", "Investors", "Careers", "Contact Us"];
    const data3 = ["Newsroom", "Customer Care", "Sitemap", "Privacy Policy", "Disclaimer"];
    const data4 = ["Arkade House, Next to Children's Academy, A.S.Marg, Ashok Nagar, Kandivali (E), Mumbai 400 101, Maharashtra, India,", "022 2886 3787 / 92228 92229", "022 2887 4742", "info@arkade.in", "www.arkade.in"]
  return (
    <div className='bg-[#393939] text-white'>
        <div className='flex'>
            <div className='text-stone-500 bg-red- basis-[5%] mx-6 my-10 text-left'>
               
                
            </div>
            <div className='text-white text-xs basis-[30%] ml-9 my-10 mb-12 text-left bg-green flex items-center'>
                <img src={img1} className="w-[80%]" />
            </div>
            <div className='text-white text-xs basis-[12%] ml-9 my-10 mb-12 text-left'>
                {data2.map((val, index) => {
                    return (
                        <div className='mt-3'>
                            {val}
                        </div>
                    )
                })}
            </div>
            <div className='text-white text-xs basis-[12%] ml-6 my-10 text-left'>
                {data3.map((val, index) => {
                    return (
                        <div className='mt-3'>
                            {val}
                        </div>
                    )
                })} 
            </div>
            <div className='text-white text-xs basis-[20%] ml-6 my-10 text-left'>
                {data4.map((val, index) => {
                    return (
                        <div className='mt-3'>
                            {val}
                        </div>
                    )
                })} 
            </div>
            <div className='text-stone-500 bg-red- basis-[5%] mx-6 my-10 text-left'>
               
                
            </div>
        </div>
        <div className='flex justify-center items-center py-4 bg-[#2D2D2D] text-white text-xs'>
            © Arkade Group 2019, all rights reserved.
        </div>
    </div>
    
  )
}

export default Footer