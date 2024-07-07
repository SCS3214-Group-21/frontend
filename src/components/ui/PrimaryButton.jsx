import React from "react"

function PrimaryButton(props) {
    return (
        <button type="button" class="text-white bg-gradient-to-br from-yellow-300 via-amber-500 to-orange-700 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
            {props.text}
        </button>
    )
}

export default PrimaryButton