import React from "react"

function SecondaryNoneFillButton(props) {
    return (
        <button className="border-2 border-custom-secondary rounded-full px-8 h-10 text-custom-secondary bg-custom-secondary bg-opacity-10 transition-all duration-[600ms] ease-in-out font-semibold hover:text-custom-primary hover:border-custom-primary hover:bg-custom-primary hover:bg-opacity-10">
            {props.text}
        </button>
    )
}

export default SecondaryNoneFillButton;