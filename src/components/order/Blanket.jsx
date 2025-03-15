import React from 'react';
import Card from './Card';
import data from '../../data.json'; // Adjust the path as necessary

function Blanket() {
    const blanketItems = data["Blanket-wash"];

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
            {blanketItems.map((item, index) => (
                <Card key={index} {...item} />
            ))}
        </div>
    );
}

export default Blanket;