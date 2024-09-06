import React from "react"
import { useNavigate } from "react-router-dom";

function SecondaryNoneFillButton(props) {
    const Navigate = useNavigate();
    return (
        <button onClick={()=>Navigate(props.link)} className="border-2 border-custom-secondary rounded-full px-8 h-10 text-custom-secondary bg-custom-secondary bg-opacity-10 transition-all duration-[600ms] ease-in-out font-semibold hover:text-custom-primary hover:border-custom-primary hover:bg-custom-primary hover:bg-opacity-10">
            {props.text}
        </button>
    )
}

export default SecondaryNoneFillButton;