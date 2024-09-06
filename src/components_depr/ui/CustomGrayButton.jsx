import React from 'react';

function CustomGrayButton(props) {
    const { text, onClick } = props;
    return (
        <button
            type="button"
            onClick={onClick}
            className="inline-block px-1 py-3 text-xs font-medium text-center text-black bg-gray-300 rounded-lg shadow-xl hover:bg-gray-400 focus:ring-2 focus:outline-none focus:ring-gray-600"
        >
            {text}
        </button>
    );
}

export default CustomGrayButton;
