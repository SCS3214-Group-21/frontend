import React, { useState } from 'react';

function SortingButton(props) {
    const { iconPath, title, items = [] } = props;
    const [selectedItem, setSelectedItem] = useState(title); // State to track the selected item
    const [isDropdownOpen, setDropdownOpen] = useState(false); // State to control dropdown visibility

    const handleSelect = (item) => {
        setSelectedItem(item.label);
        setDropdownOpen(false); // Close the dropdown after selecting an item
    };

    return (
        <div className="relative mr-12">
            <div
                tabIndex={0}
                role="button"
                onClick={() => setDropdownOpen(!isDropdownOpen)} // Toggle dropdown visibility
                className="w-24 bg-none border-2 border-[#A57E17] hover:bg-gray-200 rounded-xl shadow-xl font-semibold text-[#A57E17] flex items-center justify-center"
                style={{ height: '1.5rem', lineHeight: '1rem', padding: '0 0.25rem', fontSize: '0.75rem' }}
            >
                <svg className="w-3 h-3 mr-2 text-[#A57E17]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath} />
                </svg>
                {selectedItem} {/* Display the selected item */}
            </div>
            {isDropdownOpen && (
                <ul
                    tabIndex={0}
                    className="dropdown-content mt-1 bg-white menu rounded-box z-[1] w-52 p-1 shadow absolute right-0" // Positioning the dropdown
                >
                    {items.map((item, index) => (
                        <li key={index} onClick={() => handleSelect(item)}>
                            <a
                                href="#!"
                                className="block px-4 py-2 text-sm hover:bg-[#a57f17a2]  text-black hover:text-white " // Set hover background and text color
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SortingButton;
