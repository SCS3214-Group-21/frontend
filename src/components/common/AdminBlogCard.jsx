import React from 'react';
import PrimaryNoneFillButton from '../ui/PrimaryNoneFillButton';

function AdminBlogCard(props) {
    const { label, img, text, date, time, acceptButtonText, rejectButtonText, link } = props;

    // Determine the color class based on the label
    const labelColorClass = label => {
        switch (label.toLowerCase()) {
            case 'accepted':
                return 'text-green-500';
            case 'rejected':
                return 'text-red-500';
            case 'new':
                return 'text-blue-500';
            default:
                return 'text-gray-500'; // Default color if label doesn't match any case
        }
    };

    return (        
        <div className=" bg-[#FFFBEB] rounded-lg shadow-md flex flex-col gap-1 items-center justify-center border border-custom-primary p-2">
            <div className={`text-sm font-medium text-right w-full ${labelColorClass(label)}`}>{label}</div>
            <div>
                <img src={img} className='rounded-lg w-60 h-34'/>
            </div>

            <div className="text-black text-sm font-medium">{text}</div>
            <div className='w-full flex flex-row items-center justify-between flex-wrap'>
                <div className='flex flex-row gap-1 items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-gray-500">
                        <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                        <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                    </svg>
                    <h1 className="text-gray-500 text-xs">{date}</h1>
                </div>
                <div className='flex flex-row gap-1 items-center justify-start'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                    </svg>
                    <h1 className="text-gray-500 text-xs">{time}</h1>
                </div>
            </div>
            <div className='p-1 flex gap-2 '>
                <PrimaryNoneFillButton 
                    link = {link}
                    text={acceptButtonText} 
                />
                 <PrimaryNoneFillButton 
                    link = {link}
                    text={rejectButtonText} 
                />
            </div>
            
        </div>
    );
}

export default AdminBlogCard;
