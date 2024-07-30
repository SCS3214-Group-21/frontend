import React from 'react'

function Chatbox(props) {
    const { Name, Status, Message, Time, Path , buttontext } = props
    return (
        <div>
            <a href={Path} >
                <div className='flex  flex-1 px-4 py-3 mb-1.5 bg-[#FFDBC8] border-2 border-[#FFDBC8] rounded-lg shadow-md left-3 right-3 hover:border-[#bbaaa2]'>

                    <div className="w-20 ml-5 rounded-full lg:w-10">
                        <img
                            alt="Avatar"
                            src="../../src/assets/images/Images/Profile.png"
                        />
                    </div>
                    <div className='flex flex-col ml-10 text-black mt-2'>
                        {Name}

                    </div>
                        <div className='flex text-gray-200 ml-10'>
                        <a href="#" className="inline-flex items-center px-2 py-0 text-sm font-medium text-center text-grey bg-[#00696D] rounded-lg  focus:ring-4 focus:outline-none focus:ring-[#00696D]-2 dark:bg-[#00696D]-600 dark:hover:bg-[#00696D]-700 dark:focus:ring-[#00696D]-800">  
                        {Message}
                        </a>
                        </div>
                    <div className='ml-auto mt-2 text-black'>
                        {Time}
                    </div >
                    <div className='ml-10'>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#00696D] rounded-lg hover:bg-[#00696D] focus:ring-4 focus:outline-none focus:ring-[#00696D]-2 dark:bg-[#00696D]-600 dark:hover:bg-[#00696D]-700 dark:focus:ring-[#00696D]-800">
                {buttontext}
                {/* <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg> */}
            </a>
                    </div>


                </div>
            </a>

        </div>
    )
}

export default Chatbox
