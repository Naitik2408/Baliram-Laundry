import React from 'react';

function CartCard({ title, image, price, quantity, onIncrement, onDecrement }) {
    return (
        <div className='flex flex-col md:flex-row items-center gap-4 p-4 border-b border-stone-300'>
            <div className='w-20 h-20 rounded-full overflow-hidden'>
                <img src={image} alt={title} className='w-full h-full object-cover poppins-medium' />
            </div>
            <div className='flex-1 text-center md:text-left poppins-regular'>
                <div className='text-lg md:text-xl font-semibold'>{title}</div>
                <div className='text-sm text-stone-600'>{price} Rs/kg</div>
            </div>
            <div className='flex items-center gap-4'>
                <button onClick={onDecrement} className='bg-red-500 text-white px-4 md:px-5 py-1 md:py-2 hover:scale-110 rounded-full'>-</button>
                <div className='poppins-regular text-lg'>{quantity}</div>
                <button onClick={onIncrement} className='bg-green-500 text-white px-4 md:px-5 py-1 md:py-2 hover:scale-110 rounded-full'>+</button>
            </div>
        </div>
    );
}

export default CartCard;