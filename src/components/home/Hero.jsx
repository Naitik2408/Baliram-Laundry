import React from 'react'
import Navbar from '../Navbar'
import heroimage from '../../assets/heroimage.png'

import { GiThreeLeaves } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { TbWash } from "react-icons/tb";
import { BsPiggyBank } from "react-icons/bs";
import { LuHeartHandshake } from "react-icons/lu";
import { Link } from 'react-router-dom';

import star from '../../assets/star.png'

function Hero() {
    return (
        <div className='p-2 lg:px-20 lg:py-10 lg:flex gap-10 text-stone-800'>
            <div className='lg:w-[60%]'>
                <Navbar />
                <div className='mt-2 md:mt-5 p-3 md:p-9 rounded-3xl md:rounded-4xl bg-blue-100'>
                    <div className='lilita-one-regular text-5xl md:text-7xl lg:text-8xl'> Best Washing with <span className='text-blue-600'>Fast</span> and <span className='text-blue-600'>Free</span> Delivery</div>
                    <div className='mt-3 lg:mt-4 poppins-regular text-sm md:text-lg text-stone-600'><span className='font-semibold text-stone-700'>Law gate's first</span> and best laundry. <br /> Starting at just <span className='font-semibold text-stone-700'>25/- per kg</span></div>
                    <div className='w-full justify-center'>
                        <Link to={'/order'}>
                            <button className='mt-7 md:mt-5 text-stone-50 px-4 py-3 md:px-7 md:py-4 w-fit md:text-lg poppins-medium rounded-full shadow-md md:shadow-lg shadow-stone-400 flex items-center transition-all hover:scale-105'>
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
                    </div>
                    <div className='flex flex-col md:flex-row gap-10 md:gap-0 justify-between mt-5 md:mt-10 items-center'>
                        {/* <div className='flex gap-5 items-center'>
                            <div className='w-10 aspect-square relative'>
                                <div className='w-12 lg:w-16 aspect-square rounded-full border-2 overflow-hidden border-stone-200 absolute left-0 top-0'>
                                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile" className='w-full h-full object-cover' />
                                </div>

                                <div className='w-12 lg:w-16 aspect-square rounded-full border-2 overflow-hidden border-stone-200 absolute left-5 lg:left-10 top-0'>
                                    <img src="https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile" className='w-full h-full object-cover' />
                                </div>

                                <div className='w-12 lg:w-16 aspect-square rounded-full border-2 overflow-hidden border-stone-200 absolute left-10 lg:left-20 top-0'>
                                    <img src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile" className='w-full h-full object-cover' />
                                </div>

                                <div className='w-12 lg:w-16 aspect-square rounded-full border-2 overflow-hidden border-stone-200 absolute left-[60px] lg:left-[120px] top-0'>
                                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile" className='w-full h-full object-cover' />
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center pl-16 lg:pl-36 mt-8'>
                                <div className='flex gap-2 items-center'>
                                    <img src={star} alt="star" className='w-5 lg:w-8' />
                                    <img src={star} alt="star" className='w-5 lg:w-8' />
                                    <img src={star} alt="star" className='w-5 lg:w-8' />
                                    <img src={star} alt="star" className='w-5 lg:w-8' />
                                    <img src={star} alt="star" className='w-5 lg:w-8' />
                                </div>
                                <div className='lg:text-lg poppins-medium lg:mt-1'>900+ Review</div>
                            </div>
                        </div> */}
                        <div className=' p-4 lg:p-6 rounded-3xl flex gap-5 items-center'>
                            <div className='flex flex-col justify-center items-center gap-2'>
                                <TbTruckDelivery size={30} />
                                <div className='text-sm poppins-regular text-center'>Pickup in <br /> 10 min</div>
                            </div>
                            <div className='w-[1.8px] h-10 bg-stone-500 rounded-full'></div>
                            <div className='flex flex-col justify-center items-center gap-2'>
                                <GiReceiveMoney size={30} />
                                <div className='text-sm poppins-regular text-center'>Affordable <br /> Price</div>
                            </div>
                            <div className='w-[1.8px] h-10 bg-stone-500 rounded-full'></div>
                            <div className='flex flex-col justify-center items-center gap-2'>
                                <TbWash size={30} />
                                <div className='text-sm poppins-regular text-center'>Surfexel <br /> Wash</div>
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