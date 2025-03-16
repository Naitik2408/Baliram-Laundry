import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartCard from './CartCard';
import { incrementItem, decrementItem } from '../../Redux/orderslice';

function Cart() {
    const items = useSelector(state => state.order.items);
    const dispatch = useDispatch();

    const handleIncrement = (item) => {
        dispatch(incrementItem(item));
    };

    const handleDecrement = (item) => {
        dispatch(decrementItem(item));
    };

    return (
        <div className='w-full'>
            {items.length === 0 ? (
                <div className='text-center text-stone-600'>Your cart is currently empty.</div>
            ) : (
                items.map((item, index) => (
                    <CartCard
                        key={index}
                        {...item}
                        onIncrement={() => handleIncrement(item)}
                        onDecrement={() => handleDecrement(item)}
                    />
                ))
            )}
        </div>
    );
}

export default Cart;