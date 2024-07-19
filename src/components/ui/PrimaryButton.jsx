import React from "react"
import { useNavigate } from "react-router-dom";

function PrimaryButton(props) {
    const Navigate = useNavigate();
    return (
        <button onClick={()=>Navigate(props.link)} className="border-0 rounded-full px-8 h-10 bg-gradient-to-r from-custom-yellow-light via-custom-primary to-custom-yellow-dark text-white transition-all duration-[600ms] ease-in-out font-semibold hover:bg-custom-gray hover:from-custom-gray hover:via-custom-gray hover:to-custom-gray hover:text-custom-secondary hover:border-2 hover:border-custom-secondary">
            {props.text}
        </button>
    )
}

export default PrimaryButton;