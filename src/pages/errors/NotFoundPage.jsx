import React from 'react';
import LoginHeader from '../../components/common/LoginHeader';
import ErrorImage from '../../assets/images/Images/err.png'

function NotFoundPage(props) {

    const { text, link } = props;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF8F5]">
            {/* Main container with light background */}
            <div className="w-full max-w-6xl bg-white border border-[#FFDBC8] border-b-4 rounded-xl p-12 mx-auto flex items-center justify-between">
                {/* Left side with text */}
                <div className="flex flex-col space-y-5">
                    <h1 className="font-mono font-bold leading-snug text-black text-7xl">
                        Whoops,<br />
                        party foul.<br />
                        Page not found.
                    </h1>
                    <p className="mt-6 text-xl text-gray-700">
                        Something went wrong on our end. While we figure it out, let's get you back to the party.
                    </p>
                    {/* Add a button to go back to home or landing page */}
                    <a href={link} className="font-medium text-custom-primary">
                        {text}
                    </a>
                </div>

                {/* Right side with image */}
                <div className="hidden sm:block">
                    <img src={ErrorImage} alt="Party" className="w-[650px] h-auto" />
                </div>
            </div>
        </div>
    );
}

export default NotFoundPage;
