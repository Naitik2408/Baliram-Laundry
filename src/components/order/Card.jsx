import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

function Card({ title, image, price, description }) {
    return (
        <div className='shadow-lg md:shadow-stone-300 rounded-3xl bg-stone-100'>
            <div className='rounded-t-3xl h-48' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className='p-3'>
                <div className='flex justify-between items-center lilita-one-regular'>
                    <div className='lilita-one-regular text-xl md:text-3xl'>{title}</div>
                    <div className='text-2xl md:text-3xl'>{price} <span className='text-blue-500 text-sm'>Rs/kg</span></div>
                </div>
                <div className='mt-2 md:mt-3 text-[13px] md:text-[16px] poppins-regular'>{description}</div>
            </div>
            <div className='grid grid-cols-4 gap-2 p-3 poppins-medium'>
                <div className='flex justify-center items-center rounded-l-full bg-[royalblue] text-blue-50 py-3'><FaMinus size={22} /></div>
                <div className='col-span-2 flex justify-center items-center'>0</div>
                <div className='flex justify-center items-center rounded-r-full bg-[royalblue] text-blue-50 py-3'><FaPlus size={22} /></div>
            </div>
        </div>
    );
}

export default Card;