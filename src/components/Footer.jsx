import React from 'react'

function Footer() {
  return (
    <div className='mt-20 md:mx-10 bg-cyan-950 rounded-t-4xl md:rounded-t-[90px] px-10 md:px-20 py-12'>
        <div className='text-center text-3xl md:text-5xl lilita-one-regular text-stone-50'>Cleno</div>
        <div className='mt-5 md:mt-10 flex justify-center items-center'>
            <div className='poppins-regular md:w-[70%] text-sm md:text-lg text-center text-cyan-100'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam deleniti cupiditate accusantium voluptatum illum aperiam assumenda sequi eveniet quibusdam autem veniam dolorum ducimus voluptas reiciendis, laborum vero hic!</div>
        </div>
        <div className='py-6 border-y border-dashed border-cyan-100 mt-5 md:mt-16 flex justify-center items-center gap-7 md:gap-16 text-cyan-100 flex-wrap'>
            <div className='text-sm md:text-lg poppins-medium'>Home</div>
            <div className='text-sm md:text-lg poppins-medium'>Services</div>
            <div className='text-sm md:text-lg poppins-medium'>Pricing</div>
            <div className='text-sm md:text-lg poppins-medium'>About Us</div>
            <div className='text-sm md:text-lg poppins-medium'>FAQs</div>
        </div>
        <div className='pt-6 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-5'>
        <div className='poppins-medium text-cyan-300 text-sm'>© Copyright Cleano 2024</div>
        <div className='poppins-medium text-cyan-300 text-sm'>Privacy Policy | Term & Conditions</div>
        </div>
    </div>
  )
}

export default Footer