import React from 'react'

export default function InputField(props) {

    const { id, type, placeholder } = props

    return (

        <div className="w-4/5 mb-2">
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className="w-full px-2 py-1 bg-transparent border border-gray-800 rounded-lg"
            />
        </div>
    )
}