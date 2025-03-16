import React from 'react'
import Navbar from '../Navbar'
import heroimage from '../../assets/heroimage.png'

import { GiThreeLeaves } from "react-icons/gi";
import { BsPiggyBank } from "react-icons/bs";
import { LuHeartHandshake } from "react-icons/lu";
import { Link } from 'react-router-dom';

import star from '../../assets/star.png'

function Hero() {
    return (
        <div className='p-2 md:px-20 md:py-10 md:flex gap-10 text-stone-800'>
            <div className='md:w-[60%]'>
                <Navbar />
                <div className='mt-2 md:mt-5 p-3 md:p-9 rounded-3xl md:rounded-4xl bg-blue-100'>
                    <div className='lilita-one-regular text-5xl md:text-8xl'>Discover the Next Evolution of <span className='text-blue-600'>Laundry</span></div>
                    <div className='mt-2 md:mt-4 poppins-regular text-sm md:text-lg text-stone-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et veniam, dolorum ducimus maiores laboriosam in.</div>
                    <Link to={'/order'}>
                        <button className='mt-3 md:mt-5 text-stone-50 px-4 py-3 md:px-7 md:py-4 w-fit md:text-lg poppins-medium rounded-full shadow-md md:shadow-lg shadow-stone-400 flex items-center transition-all hover:scale-105'>
                            <div className="svg-wrapper-1">
                                <div className="svg-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                    </svg>
                                </div>
                            </div>
                            <span className="ml-2">Book Your Order</span>
                        </button>
                    </Link>
                    <div className='flex flex-col md:flex-row gap-10 md:gap-0 justify-between mt-5 md:mt-10 items-center'>
                        <div className='flex gap-5 items-center'>
                            <div className='w-10 aspect-square relative'>
                                <div className='w-12 md:w-16 aspect-square rounded-full border-2 overflow-hidden border-stone-200 absolute left-0 top-0'>
                                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile" className='w-full h-full object-cover' />
                                </div>

                                <div className='w-12 md:w-16 aspect-square rounded-full border-2 overflow-hidden border-stone-200 absolute left-5 md:left-10 top-0'>
                                    <img src="https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile" className='w-full h-full object-cover' />
                                </div>

                                <div className='w-12 md:w-16 aspect-square rounded-full border-2 overflow-hidden border-stone-200 absolute left-10 md:left-20 top-0'>
                                    <img src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile" className='w-full h-full object-cover' />
                                </div>

                                <div className='w-12 md:w-16 aspect-square rounded-full border-2 overflow-hidden border-stone-200 absolute left-[60px] md:left-[120px] top-0'>
                                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile" className='w-full h-full object-cover' />
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center pl-16 md:pl-36 mt-8'>
                                <div className='flex gap-2 items-center'>
                                    <img src={star} alt="star" className='w-5 md:w-8' />
                                    <img src={star} alt="star" className='w-5 md:w-8' />
                                    <img src={star} alt="star" className='w-5 md:w-8' />
                                    <img src={star} alt="star" className='w-5 md:w-8' />
                                    <img src={star} alt="star" className='w-5 md:w-8' />
                                </div>
                                <div className='md:text-lg poppins-medium md:mt-1'>900+ Review</div>
                            </div>
                        </div>
                        <div className='border border-stone-700 p-4 md:p-6 rounded-3xl flex gap-5 items-center'>
                            <div className='flex flex-col justify-center items-center gap-2'>
                                <GiThreeLeaves size={30} />
                                <div className='text-sm poppins-regular text-center'>Eco <br /> Friendly</div>
                            </div>
                            <div className='w-[1.8px] h-10 bg-stone-500 rounded-full'></div>
                            <div className='flex flex-col justify-center items-center gap-2'>
                                <BsPiggyBank size={30} />
                                <div className='text-sm poppins-regular text-center'>Eco <br /> Friendly</div>
                            </div>
                            <div className='w-[1.8px] h-10 bg-stone-500 rounded-full'></div>
                            <div className='flex flex-col justify-center items-center gap-2'>
                                <LuHeartHandshake size={30} />
                                <div className='text-sm poppins-regular text-center'>Eco <br /> Friendly</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-1 flex flex-col justify-end overflow-hidden'>
                <img src={heroimage} alt="heroimage" />
            </div>
        </div>
    )
}

export default Hero