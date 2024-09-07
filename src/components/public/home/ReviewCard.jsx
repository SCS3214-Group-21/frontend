import React from 'react';

function ReviewCard(props) {
    const {img, name, time, review} = props;

    return (
        <div className="flex flex-col bg-white w-full p-4 gap-6 rounded-xl relative h-full border-2 border-[#D9D9D9]">
            <p className='text-black'>{review}</p>
            <div className="flex flex-row gap-2">
                <img src={img} alt="photo01" className="w-14 h-14 rounded-full" />
                <div className="flex flex-col gap-0">
                    <h2 className='font-bold text-black'>{name}</h2>
                    <p className='text-black'>{time}</p>
                </div>
            </div>
        </div>
    );
}

export default ReviewCard;
