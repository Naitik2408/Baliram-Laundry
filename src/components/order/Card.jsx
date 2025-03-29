import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus, FaMinus } from "react-icons/fa6";
import { addItem, incrementItem, decrementItem } from '../../Redux/orderslice';

function Card({ title, image, price, description }) {
    const dispatch = useDispatch();
    const cartItem = useSelector(state => state.order.items.find(item => item.title === title));
    const [inCart, setInCart] = useState(false);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        if (cartItem) {
            setInCart(true);
            setQuantity(cartItem.quantity);
        } else {
            setInCart(false);
            setQuantity(0);
        }
    }, [cartItem]);

    const handleAddToCart = () => {
        dispatch(addItem({ title, image, price, description }));
    };

    const handleIncrement = () => {
        dispatch(incrementItem({ title }));
    };

    const handleDecrement = () => {
        dispatch(decrementItem({ title }));
    };

    return (
        <div className='shadow-lg md:shadow-stone-300 rounded-xl md:rounded-3xl bg-stone-100'>
            <div className='rounded-t-xl md:rounded-t-3xl h-24' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className='p-3'>
                <div className='flex justify-between items-center lilita-one-regular'>
                    <div className='lilita-one-regular text-[16px] md:text-3xl'>{title}</div>
                    <div className='text-[16px] md:text-3xl'>{price} <span className='text-blue-500 text-[11px] md:text-sm'>Rs/kg</span></div>
                </div>
                {/* <div className='mt-1 md:mt-3 text-[12px] md:text-[16px] poppins-regular'>{description}</div> */}
            </div>
            <div className='grid grid-cols-4 gap-2 poppins-medium transition-all duration-300'>
                {inCart ? (
                    <>
                        <div onClick={handleDecrement} className='flex justify-center items-center rounded-l-full bg-[royalblue] text-blue-50 py-2 md:py-4 cursor-pointer hover:scale-110 transition-all duration-300'><FaMinus className='' /></div>
                        <div className='col-span-2 flex justify-center items-center text-lg'>{quantity}</div>
                        <div onClick={handleIncrement} className='flex justify-center items-center rounded-r-full bg-[royalblue] text-blue-50 py-2 md:py-4 cursor-pointer hover:scale-110 transition-all duration-300'><FaPlus /></div>
                    </>
                ) : (
                    <button onClick={handleAddToCart} className='col-span-4 bg-[royalblue] text-sm flex justify-center items-center text-blue-50 py-2 md:py-4 md:px-6 rounded-full transition-all duration-300'>Add to Cart</button>
                )}
            </div>
        </div>
    );
}

export default Card;