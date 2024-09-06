import React from "react";

function CommentTag(props) {
    const { name, comment, time, img } = props;
    return(
        <div className='rounded-md bg-white flex flex-row justify-start p-2 items-center gap-2 mt-5'>
            <img
                src={img}
                alt="profile"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
            />
            <div className='flex flex-col gap-1'>
                <h1 className='text-black text-lg font-medium'>{name}</h1>
                <h1 className='text-black text-md font-normal'>{comment}</h1>
                <div className='flex flex-row gap-5'>
                    <h1 className='text-gray-500 text-xs'>{time}</h1>
                    <h1 className='text-gray-500 text-xs'>Reply</h1>
                </div>
            </div>
        </div>
    ) 
}

export default CommentTag