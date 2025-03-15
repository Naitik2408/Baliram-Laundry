import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailUnread } from "react-icons/io5";
import { FaMapMarker } from "react-icons/fa";
import { BsClockFill } from "react-icons/bs";

function FAQ() {
    return (
        <div className='px-4 md:px-20 py-10 mt-20 flex flex-col md:flex-row justify-between gap-10'>
            <div className='md:w-[45%]'>
                <div className='text-3xl md:text-5xl lilita-one-regular'>Frequently <span className='text-blue-500'>Asked Question</span></div>
                <div className='bg-blue-100 rounded-4xl p-3 md:p-8 mt-10 flex flex-col'>
                    <div className='flex items-center gap-8 py-3'>
                        <div className='p-3 md:p-5 rounded-full bg-stone-50 w-fit text-blue-500'><FaPhoneAlt size={28} /></div>
                        <div>
                            <div className='text-lg poppins-medium'>Contact</div>
                            <div className='poppins-regular text-stone-800 text-sm md:text-lg'>+91 9060557296</div>
                        </div>
                    </div>

                    <div className='flex items-center gap-8 border-y-2 border-blue-300 py-4 border-dashed'>
                        <div className='p-3 md:p-5 rounded-full bg-stone-50 w-fit text-blue-500'><IoMailUnread size={28} /></div>
                        <div>
                            <div className='text-lg poppins-medium'>Email</div>
                            <div className='poppins-regular text-stone-800 text-sm md:text-lg'>naitikkumar2408@gmail.com</div>
                        </div>
                    </div>

                    <div className='flex items-center gap-8 border-b-2 border-blue-300 py-4 border-dashed'>
                        <div className='p-3 md:p-5 rounded-full bg-stone-50 w-fit text-blue-500'><FaMapMarker size={28} /></div>
                        <div>
                            <div className='text-lg poppins-medium'>Address</div>
                            <div className='poppins-regular text-stone-800 text-sm md:text-lg'>Nhs 16/241, Chitra, Dis-Deoghar, Jharkhand</div>
                        </div>
                    </div>

                    <div className='flex items-center gap-8 py-4'>
                        <div className='p-3 md:p-5 rounded-full bg-stone-50 w-fit text-blue-500'><BsClockFill size={28} /></div>
                        <div>
                            <div className='text-lg poppins-medium'>Working Hour</div>
                            <div className='poppins-regular text-stone-800 text-sm md:text-lg'>Monday-Saturday 9:00 AM to 10:00 PM</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-1 p-8'>

            </div>
        </div>
    )
}

export default FAQ