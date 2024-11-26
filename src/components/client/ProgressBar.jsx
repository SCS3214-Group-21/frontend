import { useState } from 'react';
import brideImage from "../../../src/assets/images/Images/bride.png";
import groomImage from "../../../src/assets/images/Images/groom1.png";

const ProgressBar = () => {
    const [progress, setProgress] = useState(50); // Example initial progress
    const maxProgress = 100;

    const increaseProgress = () => {
        setProgress(prev => (prev + 10 <= maxProgress ? prev + 10 : maxProgress));
    };

    const progressPercentage = (progress / maxProgress) * 100;

    return (
        <div className="text-black">
            <div className="relative w-96 h-5 bg-gray-200 rounded-lg border-2 border-[#006972] overflow-visible"> {/* overflow-visible allows the image to be fully visible */}
                {/* Progress bar */}
                <div
                    className="h-full bg-[#006972] transition-width duration-300"
                    style={{ width: `${progressPercentage}%` }}
                ></div>

                {/* Bride image that moves with progress */}
                <img
                    src={brideImage}
                    alt="bride"
                    className="absolute z-50 w-20 h-20"
                    style={{ top: '-40px', left: `${progressPercentage}%`, transform: 'translateX(-50%)' }} // Adjust top to ensure image is above the bar
                />

                {/* Groom image that stays at the end */}
                <img
                    src={groomImage}
                    alt="groom"
                    className="absolute z-50 w-16 h-20"
                    style={{ top: '-38px', left: '100%', transform: 'translateX(-50%)' }} // Position groom image at the end
                />
            </div>

            <div className="flex gap-2 mt-4">
                {/* <input
                    type="text"
                    className="flex-grow p-2 text-black bg-gray-200 border-2 rounded-full border-custom-primary"
                    placeholder="Add new task"
                /> */}
                <button
                    className="px-4 py-2 text-white bg-blue-500 rounded-full"
                    onClick={increaseProgress}
                >
                    Increase Progress
                </button>
            </div>
        </div>
    );
};

export default ProgressBar;
