import React from 'react'
import img1 from './assets/04.png'
import img2 from './assets/05.png'
import img3 from './assets/06.png'
import img4 from './assets/07.png'

function Ourproject() {
  return (
    <div className='flex items-center justify-between h-[35rem] bg-[#F4F4F4]'>
        <div className='basis-[5%] mx-6 my-10 text-left'>
                
        </div>

        <div className='flex flex-col justify-center items-center basis-[82%]'>
            <div className='flex justify-between w-full'>
                <div  className=' flex items-center'>
                    <div className='text-2xl font-bold flex '>OUR <div className='text-[#EB870C] ml-2'>PROJECTS</div></div>
                    <div className='mx-2 border-t border-[#000000] w-16'></div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='px-7 py-2 text-center bg-[#EB870C] text-white'>ONGOING</div>
                    <div className='px-7 py-2 text-center bg-stone-800 text-white'>UPCOMING</div>
                </div>
            </div>
            <div className='flex w-full justify-center mt-5'>
                <div className='relative'>
                    <img className='w-64' src={img1} />
                    <div className='absolute bottom-[3%] left-[5%] shadow-2xl shadow-black'>
                        <div className='text-[#EB870C] font-bold'>ARKADE</div>
                        <div className='text-white text-sm'>GOREGAON</div>
                    </div>
                </div>
                <div className='relative'>
                    <img className='w-64' src={img2} />
                    <div className='absolute bottom-[3%] left-[5%] shadow-2xl shadow-black'>
                        <div className='text-[#EB870C] font-bold'>ARKADE</div>
                        <div className='text-white text-sm'>GOREGAON</div>
                    </div>
                </div>
                <div className='relative'>
                    <img className='w-64' src={img3} />
                    <div className='absolute bottom-[3%] left-[5%] shadow-2xl shadow-black'>
                        <div className='text-[#EB870C] font-bold'>ARKADE</div>
                        <div className='text-white text-sm'>GOREGAON</div>
                    </div>
                </div>
                <div className='relative'>
                    <img className='w-64' src={img4} />
                    <div className='absolute bottom-[3%] left-[5%] shadow-2xl shadow-black'>
                        <div className='text-[#EB870C] font-bold'>ARKADE</div>
                        <div className='text-white text-sm'>GOREGAON</div>
                    </div>
                </div>
            </div>
        </div>

        <div className='basis-[5%] mx-6 my-10 text-left'>
                  
        </div>
    </div>
  )
}

export default Ourproject