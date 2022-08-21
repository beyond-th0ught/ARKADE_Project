import React from 'react'
import { Phone, Home, Mail, Globe, Briefcase } from 'react-feather'

export default function detail() {
  return (
    <div class="flex w-[100%] h-[30rem]">
                <div className='w-[50%] bg-[#F4F4F4] flex relative'>
                    <div className='rotate-[-90deg] absolute top-[45%] text-gray-300'>S C H E D U L E  _ A _ S I T E _ V I S I T</div>
                    <div className='flex flex-col w-full justify-center items-center'>
                      <input placeholder='Name' className='my-2 w-[52%] px-3 rounded-sm py-[5px] ' />
                      <input placeholder='Email' className='my-2 w-[52%] px-3 rounded-sm py-[5px] ' />
                      <input placeholder='Phone' className='my-2 w-[52%] px-3 rounded-sm py-[5px] ' />
                      <input placeholder='Project' className='my-2 w-[52%] px-3 rounded-sm py-[5px] ' />
                      <textarea placeholder='Message' rows={3} className="rounded-sm my-2 w-[52%] px-3 py-1" />
                      <button className='bg-[#eb870d] w-[52%] rounded-sm p-1 my-2'>Submit Now</button>
                    </div>
                </div>
                <div class="w-[50%] flex justify-center items-center bg-red">
                  <div className='w-[80%]'>
                    
                    <h1 className='flex text-xs mb-3 items-center '>
                      <div className='rounded-full p-2 bg-[#eb870d] my-1 '>
                        <Briefcase size={18} color='white'/> 
                      </div>
                      <div className='w-14 border-t-2 border-[#eb870d] mr-3'></div> 
                      <div className='w-[90%]'>Arkade House, Next to Children's Academy, A.S.Marg, Ashok Nagar, Kandivali (C), Mumbai 400 101, Maharashtra, India</div>
                    </h1>
                    
                    <h1 className='flex text-xs mb-3 items-center'>
                      <div className='rounded-full p-2 bg-[#eb870d] my-1 '>
                        <Phone size={18} color='white'/> 
                      </div>
                      <div className='w-14 border-t-2 border-[#eb870d] mr-3'></div> 
                      <div className='w-[90%]'>022 2886 3787 / 92228 92229</div>
                    </h1>
                    
                    <h1 className='flex text-xs mb-3 items-center'>  
                      <div className='rounded-full p-2 bg-[#eb870d] my-1 '>
                        <Home size={18} color='white'/> 
                      </div>
                      <div className='w-14 border-t-2 border-[#eb870d] mr-3'></div> 
                      <div className='w-[90%]'>022 2887 4742</div>
                    </h1>
                    
                    <h1 className='flex text-xs mb-3 items-center'> 
                      <div className='rounded-full p-2 bg-[#eb870d] my-1 '>
                        <Mail size={18} color='white'/> 
                      </div>
                      <div className='w-14 border-t-2 border-[#eb870d] mr-3'></div>  
                      <div className='w-[90%]'>info@arkade.in</div>
                    </h1>
                    
                    <h1 className='flex text-xs mb-3 items-center'> 
                      <div className='rounded-full p-2 bg-[#eb870d] my-1 '>
                        <Globe size={18} color='white'/> 
                      </div>
                      <div className='w-14 border-t-2 border-[#eb870d] mr-3'></div>  
                      <div className='w-[90%]'> www.arkade.in </div>
                    </h1>
                  
                  </div>
                </div>
    </div>
    
  )
}
