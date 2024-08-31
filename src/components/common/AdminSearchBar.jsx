// SearchBar.jsx
import React from 'react';

export default function SearchBar({ id, value, onChange, placeholder = 'Search...' }) {
    return (
        <div className="w-full px-2 py-1 bg-transparent border border-gray-800 rounded-lg flex items-center">
            <input
                id={id}
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full bg-transparent focus:outline-none text-gray-900 dark:text-white px-2 py-1"
            />
            {/* Add an optional search icon or button here */}
            <button
                type="button"
                className="ml-2 p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
                🔍 {/* Replace with an actual icon or use a library like FontAwesome */}
            </button>
        </div>
    );
}
