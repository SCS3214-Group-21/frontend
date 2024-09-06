import React from 'react'

function Chatbox(props) {
    const { Name, Status, Message, Time, Path } = props
    return (
        <div>
            <a href={Path} >
                <div className='flex  flex-1 px-4 py-4 mb-5 bg-[#FFDBC8] border-2 border-[#FFDBC8] rounded-lg shadow-md left-3 right-3 hover:border-[#bbaaa2]'>

                    <div className="w-20 ml-10 rounded-full lg:w-10">
                        <img
                            alt="Avatar"
                            src="../../src/assets/images/Images/Profile.png"
                        />
                    </div>
                    <div className='flex flex-col ml-10 text-black'>
                        {Name}
                        <div className='flex text-gray-600'>
                            ({Status}) {Message}
                        </div>

                    </div>
                    <div className='ml-auto text-black'>
                        {Time}
                    </div>


                </div>
            </a>

        </div>
    )
}

export default Chatbox
