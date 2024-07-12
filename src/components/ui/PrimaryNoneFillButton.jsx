import React from "react"

function PrimaryNoneFillButton(props) {
    return (
        <button className="border-2 border-custom-primary rounded-full px-8 h-10 text-custom-primary bg-custom-primary bg-opacity-10 transition-all duration-[600ms] ease-in-out font-semibold hover:text-custom-secondary hover:border-custom-secondary hover:bg-custom-secondary hover:bg-opacity-10">
            {props.text}
        </button>
    )
}

export default PrimaryNoneFillButton;