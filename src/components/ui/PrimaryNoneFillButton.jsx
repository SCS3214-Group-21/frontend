import React from "react";
import { useNavigate } from "react-router-dom";

function PrimaryNoneFillButton({ text, link, onClick }) {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault(); // Prevent default button action
        if (link) {
            navigate(link);
        } else if (onClick) {
            onClick();
        }
    };

    return (
        <button
            onClick={handleClick}
            className="border-2 border-custom-primary rounded-full px-8 h-10 text-custom-primary bg-custom-primary bg-opacity-10 transition-all duration-[600ms] ease-in-out font-semibold hover:text-custom-secondary hover:border-custom-secondary hover:bg-custom-secondary hover:bg-opacity-10"
        >
            {text}
        </button>
    );
}

export default PrimaryNoneFillButton;
