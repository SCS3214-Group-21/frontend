import React from 'react';
import PrimaryNoneFillButton from '../ui/PrimaryNoneFillButton';

function PackageCard(props) {
    const { img, text, button, link } = props;

    return (        
        <div className="w-full h-full bg-white rounded-lg shadow-md flex flex-col gap-3 items-center justify-center border border-custom-primary">
            <div className='p-1'>
                <img src={img} className='rounded-lg'/>
            </div>

            <div className="text-black text-sm font-medium">{text}</div>
            <div className='p-1'>
                <PrimaryNoneFillButton 
                    link = {link}
                    text={button} 
                />
            </div>
        </div>
    );
}

export default PackageCard;
