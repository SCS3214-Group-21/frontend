import React from 'react';

export default function InputField(props) {
    const { id, type, placeholder, name, value, onChange, options } = props;

    return (
        <div className="w-4/5 mb-6">
            {type === 'select' ? (
                <select
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option value="">What Type of Vendor You Are</option>
                    {options && options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    name={name}
                    onChange={onChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            )}
        </div>
    );
}


// import React from 'react'

// export default function InputField(props) {

//     const { id, type, placeholder, name, value, onChange } = props

//     return (

//         <div className="w-4/5 mb-6">
//             <input
//                 id={id}
//                 type={type}
//                 placeholder={placeholder}
//                 value={value}
//                 name={name}
//                 onChange={onChange}
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             />
//         </div>
//     )
// }

// className="w-full px-2 py-1 bg-transparent border border-gray-800 rounded-lg"

