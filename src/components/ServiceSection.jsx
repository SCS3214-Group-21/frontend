import React from 'react';

function ServiceSection({ serviceKey, serviceName, minPrice, avgPrice, imageSrc, allocatedPrice, handlePriceChange, checkboxChecked, handleCheckboxChange }) {
    return (
        <div className='w-[85%] flex flex-col gap-3 border-2 border-black p-3'>
            <h1 className='text-black text-xl'>{serviceName}</h1>
            <div className='flex flex-row gap-10 justify-between'>
                <div className='w-60 h-48'>
                    <img src={imageSrc} className='h-full w-full object-cover rounded-xl' alt={serviceName} />
                </div>
                <div className="d-coolinput flex flex-row justify-center">
                    <label htmlFor={`${serviceKey}-min-price`} className="d-text">Minimum Price</label>
                    <div className="d-input-wrapper">
                        <input id={`${serviceKey}-min-price`} type="text" value={`Rs ${minPrice}/=`} name={`${serviceKey}-min-price`} className="d-input" disabled />
                    </div>
                    <label htmlFor={`${serviceKey}-avg-price`} className="d-text">Average Price</label>
                    <div className="d-input-wrapper">
                        <input id={`${serviceKey}-avg-price`} type="text" value={`Rs ${avgPrice}/=`} name={`${serviceKey}-avg-price`} className="d-input" disabled />
                    </div>
                </div>
                <div className="d-coolinput flex flex-row justify-end">
                    <label htmlFor={`${serviceKey}-allocated-price`} className="d-text">Enter your allocated price</label>
                    <div className="d-input-wrapper">
                        <input
                            id={`${serviceKey}-allocated-price`}
                            type="text"
                            placeholder="Enter value"
                            name={`${serviceKey}-allocated-price`}
                            className="d-input-2"
                            value={allocatedPrice}
                            onChange={handlePriceChange(serviceKey)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceSection;
