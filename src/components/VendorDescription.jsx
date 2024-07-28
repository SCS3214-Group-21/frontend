import React from "react";
import SecondaryButton from "./ui/SecondaryButton";

function VendorDescription(props){
    const { o_name, address, email, starCount, showStars, img, v_name, text, link, button } = props;

    return(
        <div className="w-full min-h-52">
            <div className="flex flex-row items-center justify-between w-full flex-wrap">
                <div className="text-black flex flex-col">
                    <h1 className="font-bold text-4xl">{o_name}</h1>
                    <h6 className="text-md">{address}</h6>
                    <h6 className="text-md">{email}</h6>
                    {/* <h1 className="text-md">{stars}</h1> */}
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
                                        style={{ color: index < starCount ? '#A57E17' : '#c4c2bf' }}
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <SecondaryButton link={link} text={button} />
            </div>
            <div className="flex flex-col lg:flex-row items-center w-full flex-wrap gap-5 lg:gap-[5%] py-5">
                <div className="flex flex-col w-56 lg:w-[30%] h-80">
                    <img src={img} alt="img1" className="h-full"/>
                    <h1 className="text-black font-bold text-md text-center">{v_name}</h1>
                </div>
                <p className="text-black w-full lg:w-[65%] text-justify">{text}</p>
            </div>
        </div>
    )
}

export default VendorDescription;