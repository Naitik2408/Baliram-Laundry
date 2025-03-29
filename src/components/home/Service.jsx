import React from 'react'

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Service() {
    return (
        <div className='p-5 lg:px-20 lg:py-10 mt-20'>
            <div className='lg:flex justify-between'>
                <div className='lg:w-1/2'>
                    <div className='text-3xl md:text-5xl lilita-one-regular'>Why <span className='text-blue-500'>Us??</span></div>
                    <div className='text-sm md:text-lg mt-4 md:mt-5 poppins-regular text-stone-700'>
                        <ol className='flex flex-col gap-2'>
                            <li className='flex gap-2 items-center'><div className='p-1 bg-blue-500 rounded-full text-stone-50'><IoIosArrowForward size={10} /></div> <span className='poppins-medium text-stone-600'>We Offer the widest verity of cleaning</span></li>
                            <li className='flex gap-2 items-center'><div className='p-1 bg-blue-500 rounded-full text-stone-50'><IoIosArrowForward size={10} /></div> <span className='poppins-medium text-stone-600'>Most Affordable price in whole area.</span></li>
                            <li className='flex gap-2 items-start'><div className='p-1 bg-blue-500 rounded-full text-stone-50'><IoIosArrowForward size={10} /></div> <span className='poppins-medium text-stone-600'>We use best machines and washing products.</span></li>
                            <li className='flex gap-2 items-start'><div className='p-1 bg-blue-500 rounded-full text-stone-50'><IoIosArrowForward size={10} /></div> <span className='poppins-medium text-stone-600'>We deliver your cloths on 3rd day after Pickup</span></li>
                        </ol>
                    </div>
                </div>
                <div className='hidden lg:flex justify-between gap-5 text-stone-700 items-end'>
                    <div className='border-2 border-stone-500 px-8 py-3 rounded-full rounded-tr-4xl cursor-pointer hover:bg-orange-500 hover:border-orange-500 hover:text-stone-50 transition-all duration-300'><IoIosArrowBack size={25} /></div>
                    <div className='border-2 border-stone-500 px-8 py-3 rounded-full rounded-tl-4xl cursor-pointer hover:bg-orange-500 hover:border-orange-500 hover:text-stone-50 transition-all duration-300'><IoIosArrowForward size={25} /></div>
                </div>
            </div>
            <div className='mt-10 md:mt-16 grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-9'>
                <div className='w-full h-52 md:h-[330px] rounded-2xl md:rounded-[40px] flex flex-col justify-end overflow-hidden' style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='flex justify-between items-center py-2 px-3 pl-3 md:pl-6 md:rounded-full bg-stone-800/55 backdrop-blur-3xl'>
                        <div className='md:text-lg poppins-regular text-stone-50'>Laundry</div>
                        <div className='hidden md:block h-full bg-stone-50 text-stone-800 py-4 px-8 rounded-full'><IoIosArrowForward size={25} /></div>
                    </div>
                </div>

                <div className='w-full h-52 md:h-[330px] rounded-2xl md:rounded-[40px] flex flex-col justify-end overflow-hidden' style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='flex justify-between items-center py-2 px-3 pl-3 md:pl-6 md:rounded-full bg-stone-800/55 backdrop-blur-3xl'>
                        <div className='md:text-lg poppins-regular text-stone-50'>Laundry</div>
                        <div className='hidden md:block h-full bg-stone-50 text-stone-800 py-4 px-8 rounded-full'><IoIosArrowForward size={25} /></div>
                    </div>
                </div>

                <div className='w-full h-52 md:h-[330px] rounded-2xl md:rounded-[40px] flex flex-col justify-end overflow-hidden' style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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