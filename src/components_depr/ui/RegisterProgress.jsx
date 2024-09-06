import React from "react"

function RegisterProgress(props) {
    return (        
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div className="bg-gradient-to-r from-orange-700 via-amber-600 to-yellow-300 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{width: `${props.precentage}%`}}>
            {props.precentage}%
        </div>
        </div>
    )
}

export default RegisterProgress