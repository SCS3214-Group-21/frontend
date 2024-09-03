import React from "react";
import { useNavigate } from "react-router-dom";

function PrimaryButton({ text, link, onClick }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (onClick) {
            onClick(); // Execute the passed onClick function if provided
        } else if (link) {
            navigate(link); // Navigate to the provided link
        }
    };

    return (
        <button

            onClick={handleClick}
            type="button"
            className="border-0 rounded-full px-8 h-10 bg-custom-primary text-white transition-all duration-[600ms] ease-in-out font-semibold hover:bg-custom-gray hover:text-custom-secondary hover:border-2 hover:border-custom-secondary"
        >
            {text}

        </button>
    );
}

export default PrimaryButton;
