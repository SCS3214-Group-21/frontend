import React, { forwardRef } from 'react'

const InputField = forwardRef((props, ref) => {

    const {
        id,
        type,
        placeholder,
        name,
        value,
        onChange,
        autoComplete,
        required,
        aria_invalid,
        aria_describedby,
        onFocus,
        onBlur
    } = props

    return (

        <div className="mb-6 w-4/5">
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={onChange}
                ref={ref}
                autoComplete={autoComplete}
                required = {required}
                aria-invalid={aria_invalid}
                aria-describedby={aria_describedby}
                onFocus={onFocus}
                onBlur={onBlur}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
        </div>
    )
})

export default InputField

// className="w-full px-2 py-1 bg-transparent border border-gray-800 rounded-lg"