// import React from 'react';

// function NewServiceDescriptionCard(props) {
//     const { href, img, alt, name, price, description, starCount, showStars } = props;

//     return (
//         <div className={`w-[264px]  max-w-sm bg-[#FFFBEB] border border-gray-200 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${showStars ? '' : 'hide-stars'}`}>
//             <a href={href} className="block">
//                 <div className="p-4">
//                     <img className="object-cover w-full h-40 rounded-lg" src={img} alt={alt} />
//                 </div>
//                 <div className="px-5 pb-4">
//                     <h6 className="text-lg font-semibold tracking-tight text-gray-900">{name}</h6>
//                     <div className="flex items-center justify-between mt-2">
//                         {/* <span className="text-lg font-bold text-gray-900">Price per person<br />{price}</span> */}
//                     </div>
//                     <p className="mt-2 text-sm text-gray-600 line-clamp-2">
//                         {description}
//                     </p>
//                     {showStars && (
//                         <div className="flex items-center mt-2.5">
//                             <div className="flex items-center space-x-1">
//                                 {[...Array(5)].map((_, index) => (
//                                     <svg
//                                         key={index}
//                                         className="w-4 h-4"
//                                         aria-hidden="true"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         fill="currentColor"
//                                         viewBox="0 0 22 20"
//                                         style={{ color: index < starCount ? '#A57E17' : '#c4c2bf' }}
//                                     >
//                                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                                     </svg>
//                                 ))}
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </a>
//         </div>
//     );
// }

// NewServiceDescriptionCard.defaultProps = {
//     showStars: true,
// };

// export default NewServiceDescriptionCard;


import React from 'react';

function NewServiceDescriptionCard(props) {
    const { href, img, alt, name, price, description, starCount, showStars } = props;

    return (
        <div
            className={`w-[264px] max-w-sm bg-[#FFFBEB] border border-gray-200 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${
                showStars ? '' : 'hide-stars'
            }`}
        >
            <a href={href} className="block">
                <div className="p-4">
                    <img
                        className="object-cover w-full h-40 rounded-lg"
                        src={img}
                        alt={alt}
                    />
                </div>
                <div className="px-5 pb-4">
                    <h6 className="text-lg font-semibold tracking-tight text-gray-900">{name}</h6>
                    <div className="flex items-center justify-between mt-2">
                        {/* Uncomment if price display is needed */}
                        {/* <span className="text-lg font-bold text-gray-900">Price per person<br />{price}</span> */}
                    </div>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                        {description}
                    </p>
                    {showStars && (
                        <div className="flex items-center mt-2.5">
                            <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, index) => (
                                    <svg
                                        key={index}
                                        className="w-4 h-4"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                        style={{
                                            color: index < starCount ? '#A57E17' : '#c4c2bf',
                                        }}
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </a>
        </div>
    );
}

// Default props to ensure stars are shown by default
NewServiceDescriptionCard.defaultProps = {
    showStars: true,
};

export default NewServiceDescriptionCard;
