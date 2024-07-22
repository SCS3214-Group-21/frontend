import React from "react";

function CommentInput() {
    return(
        <div className='rounded-md bg-[#FFDBC8] flex flex-row justify-between p-2 items-center gap-2 mt-5'>
            <div className='w-full flex flex-row gap-2 items-center justify-center'>
            <img
                src="../src/assets/images/Images/profile.png"
                alt="profile"
                className="w-10 h-10 sm:w-12 sm:h-12"
            />
            <input 
                placeholder="Leave a comment here.........."
                className="p-2 w-full rounded-md bg-[#FFDBC8] text-black text-xl focus:outline-none focus:border-none"
            />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-black cursor-pointer">
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
        </div>
    ) 
}

export default CommentInput