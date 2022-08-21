import React from 'react'
import Third from './assets/03.png'
import './style.css'

export default function info() {
  return (
    <div className='my-12'>
      <div className='whitespace-pre-wrap font-dark text-center  text-xs'>
        W  E    A  R  E    A  R  K  A  D  E  G  R  O  U  P
      </div>

      <div class="flex space-x-24">
        <div class="info text-center" >
            TEL: 022 2886 3787
        </div>

        <div class="flex justify-between space-x-36 py-16">
        <div>
        <div class="relative h-[250px] w-[350px] Second bg-cover">
             <div class="absolute  top-6 left-6 border-[2px] border-[#eb870d] h-[200px] w-[300px]" />
             <div class="absolute h-[120px] w-[120px] bg-cover top-[72%] left-[82%] Third"/>
        </div>
        </div>
            <div className='flex flex-col my- '>
                <div className='px-3 border-l-[6px] border-[#eb870d]'>
                <div className='leading-8 text-[#eb870d] text-sm  '>
                    A littel about us
                </div>
                <div className=' text-2xl font-bold'>
                    There more to us than meets the eyes.
                </div>
                </div>
                <p className='text-gray-400 text-[12px] py-10 '>
                It is quite easy to define an organization solely by what services it offers. More often than not, what an
entity does in the most commercial sensebecomes the sole descriptor for its purpose of existence, i.e.
except for thosewho choose to add to this description by transcending their traditional role. At Arkade
Group, there is more to us than what meets the eye. What was started as a passionate drive to craft
abodes by Shri Mangilal R. Jain in 1984 has now turned into much more than just that. Led by people who
believe in the power of passion and leaps of faith, we have become Life Investors, multiplying life &
providing contentment.
                </p>
               
            </div>            
        </div>
        <div class='uppercase info text-center'>
        info@arkade.in
        </div>
      </div>
    </div>
  )
}