import React from "react"
import { useNavigate } from "react-router-dom";

function PrimaryButton(props) {
    const Navigate = useNavigate();
    return (
        <button 
            type="button" 
            class="text-white bg-gradient-to-br from-yellow-500 to-yellow-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2.5 mb-2"
        >
            {props.text}
        </button>
    )
}

export default PrimaryButton;