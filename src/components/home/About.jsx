import React from 'react';
import { FaBookmark } from "react-icons/fa6";

function About() {
    return (
        <div className='mx-5 lg:mx-20 xl:mx-32 2xl:mx-40 px-4 md:px-10 lg:px-20 xl:px-28 2xl:px-36 py-10 md:py-20 mt-20 bg-blue-50 rounded-4xl md:rounded-[90px] 2xl:rounded-[120px]'>
            <div className='text-center text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl lilita-one-regular'>About <span className='text-blue-500'>Us</span></div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 mt-10 md:mt-20 xl:mt-24'>
                <div>
                    <div className='text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl poppins-medium'>
                        <span className='text-blue-500 poppins-semibold'>Baliram Laundry</span> is the very first Laundry in Law gate established by <span className='text-blue-500 poppins-semibold'>Mr. Baliram Kumar Gupta</span>
                    </div>
                    <div className='mt-3 poppins-regular text-stone-800 text-sm md:text-[16px] xl:text-lg 2xl:text-xl'>
                        We take care of your clothes from pickup till delivery and ensure that all items are cleaned with utmost care.
                    </div>
                    <div className='mt-7 md:mt-16 xl:mt-20 2xl:mt-24 flex flex-col gap-5 md:gap-8 xl:gap-10'>
                        <div className='flex gap-5'>
                            <FaBookmark size={25} className='xl:size-32 2xl:size-40' />
                            <div className='flex-1 poppins-regular'>
                                <div className='text-xl md:text-2xl xl:text-3xl 2xl:text-4xl poppins-medium'>7+ Years of Experience</div>
                                <div className='poppins-light text-stone-700 mt-2 text-sm md:text-lg xl:text-xl 2xl:text-2xl'>
                                    We have refined our services and washing processes over the years, ensuring organized operations and optimal results. <br /><br />
                                    Our experience has taught us that every customer has different needs, and we are always ready to help with your laundry requirements.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rounded-3xl w-full h-64 md:h-80 lg:h-96 xl:h-[500px] 2xl:h-[600px] bg-cover bg-center' 
                    style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/cheerful-curly-haired-young-busy-woman-wears-snorkeling-mask-diving-has-lot-laundry-make-does-housework-drowned-multicolored-clothes-against-blue-wall_273609-53198.jpg?t=st=1741960759~exp=1741964359~hmac=0a261bf368628fd63528daddd00f36de3115c882e037d9f96798e021a4cf8421&w=1380)' }}>
                </div>
            </div>
        </div>
    );
}

export default About;