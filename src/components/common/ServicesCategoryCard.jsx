import React from 'react';

function ServicesCategoryCard(props) {
    const { img, alt, type, href } = props;
    return (
        <div className="relative w-[225px] h-[180px] overflow-hidden rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <a href={href} className="block w-full h-full bg-base-100">
                <figure className="w-full h-full">
                    <img
                        src={img}
                        alt={alt}
                        className="object-cover w-full h-full rounded-lg"
                    />
                    <div className="absolute inset-0 transition-opacity duration-300 bg-black rounded-lg opacity-20 hover:opacity-30"></div>
                </figure>
                <div className="absolute inset-0 flex items-end p-4">
                    <div className="p-0 card-body">
                        <div className="card-actions">
                            <h2 className="text-white card-title">{type}</h2>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default ServicesCategoryCard;

