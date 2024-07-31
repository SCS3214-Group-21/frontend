import React from "react"
import { useNavigate } from "react-router-dom";

function PrimaryButton(props) {
    const Navigate = useNavigate();
    return (
        <button 
            onClick={()=>Navigate(props.link)}
            type="button" 
            className="text-white bg-gradient-to-br from-yellow-600 to-yellow-800 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-yellow-600 dark:focus:ring-yellow-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2.5 mb-2"
        >
            {props.text}
        </button>
    )
}

export default PrimaryButton;