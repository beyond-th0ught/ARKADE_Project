import React from 'react'
import Footer from './footer'
import Testimon from './testimonial'
import Investor from './Investor'
import Detail from './detail'
import Ourproject from './ourproject'
import Navbar from './navbar'
import Home from './Home'
import Info from './info'
import img14 from './assets/14.png';
import {Mail, Phone} from 'react-feather'

function App() {
  return (
    <>
        <div className='flex justify-center items-center py-1  bg-[#393939] text-white text-xs'>
            <div className='text-stone-500 bg-red- basis-[5%] text-left'>
               
                
            </div>
            <div className='flex justify-between basis-[82%]'>
              <div className='flex'>
                <div className='flex justify-center text-md  items-center'>
                    <Mail className='mr-1' size={17} />
                    info@arkade.in
                </div>
                <div className='flex justify-center  text-md items-center ml-5'>
                    <Phone className='mr-1' size={17} />
                    022 2886 3787 
                </div>
              </div>
              <img className='w-[17%]' src={img14} />
            </div>
            <div className='text-stone-500 bg-red- basis-[5%] text-left'>
               
                
            </div>
        </div>
        <Navbar />
        <Home />
        <Info />
        <Ourproject />
        <Detail />
        <Investor />
        <Testimon />
        <Footer/>
       
    </>
  )
}

export default App