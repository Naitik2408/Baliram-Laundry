import React from 'react'

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Service() {
  return (
    <div className='p-5 md:px-20 md:py-10 mt-20'>
        <div className='md:flex justify-between'>
            <div className='md:w-1/2'>
                <div className='text-3xl md:text-5xl lilita-one-regular'>Our <span className='text-blue-500'>Services</span></div>
                <div className='text-sm md:text-lg mt-2 md:mt-5 poppins-regular text-stone-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate nobis error consequuntur doloribus similique quia repudiandae modi minus beatae eligendi!</div>
            </div>
            <div className='hidden md:flex justify-between gap-5 text-stone-700 items-end'>
                <div className='border-2 border-stone-500 px-8 py-3 rounded-full rounded-tr-4xl cursor-pointer hover:bg-orange-500 hover:border-orange-500 hover:text-stone-50 transition-all duration-300'><IoIosArrowBack size={25} /></div>
                <div className='border-2 border-stone-500 px-8 py-3 rounded-full rounded-tl-4xl cursor-pointer hover:bg-orange-500 hover:border-orange-500 hover:text-stone-50 transition-all duration-300'><IoIosArrowForward size={25} /></div>
            </div>
        </div>
        <div className='mt-10 md:mt-16 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-9'>
            <div className='w-full h-52 md:h-[330px] rounded-2xl md:rounded-[40px] flex flex-col justify-end overflow-hidden' style={{backgroundImage: 'url(https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className='flex justify-between items-center py-2 px-3 pl-3 md:pl-6 md:rounded-full bg-stone-800/55 backdrop-blur-3xl'>
                    <div className='md:text-lg poppins-regular text-stone-50'>Laundry</div>
                    <div className='hidden md:block h-full bg-stone-50 text-stone-800 py-4 px-8 rounded-full'><IoIosArrowForward size={25} /></div>
                </div>
            </div>

            <div className='w-full h-52 md:h-[330px] rounded-2xl md:rounded-[40px] flex flex-col justify-end overflow-hidden' style={{backgroundImage: 'url(https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className='flex justify-between items-center py-2 px-3 pl-3 md:pl-6 md:rounded-full bg-stone-800/55 backdrop-blur-3xl'>
                    <div className='md:text-lg poppins-regular text-stone-50'>Laundry</div>
                    <div className='hidden md:block h-full bg-stone-50 text-stone-800 py-4 px-8 rounded-full'><IoIosArrowForward size={25} /></div>
                </div>
            </div>

            <div className='w-full h-52 md:h-[330px] rounded-2xl md:rounded-[40px] flex flex-col justify-end overflow-hidden' style={{backgroundImage: 'url(https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className='flex justify-between items-center py-2 px-3 pl-3 md:pl-6 md:rounded-full bg-stone-800/55 backdrop-blur-3xl'>
                    <div className='md:text-lg poppins-regular text-stone-50'>Laundry</div>
                    <div className=' hidden md:block h-full bg-stone-50 text-stone-800 py-4 px-8 rounded-full'><IoIosArrowForward size={25} /></div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Service