// import React, { useState } from 'react';

// function SortingButton(props) {
//     const { iconPath, title, items = [] } = props;
//     const [selectedItem, setSelectedItem] = useState(title); // State to track the selected item
//     const [isDropdownOpen, setDropdownOpen] = useState(false); // State to control dropdown visibility

//     const handleSelect = (item) => {
//         setSelectedItem(item.label);
//         setDropdownOpen(false); // Close the dropdown after selecting an item
//     };

//     return (
//         <div className="relative mr-4"> {/* Reduced margin-right for better spacing */}
//             <div
//                 tabIndex={0}
//                 role="button"
//                 onClick={() => setDropdownOpen(!isDropdownOpen)} // Toggle dropdown visibility
//                 className="w-32 bg-gray-300 border-2 border-[#A57E17] hover:bg-gray-200 rounded-xl shadow-xl font-semibold text-[#A57E17] flex items-center justify-center"
//                 style={{ height: '2rem', lineHeight: '1.5rem', padding: '0 0.5rem', fontSize: '1rem' }} // Increased height, padding, and font size
//             >
//                 <svg className="w-4 h-4 mr-2 text-[#A57E17]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath} />
//                 </svg>
//                 {selectedItem} {/* Display the selected item */}
//             </div>
//             {isDropdownOpen && (
//                 <ul
//                     tabIndex={0}
//                     className="dropdown-content mt-1 bg-white menu rounded-box z-[1] w-52 p-1 shadow absolute right-0" // Positioning the dropdown
//                 >
//                     {items.map((item, index) => (
//                         <li key={index} onClick={() => handleSelect(item)}>
//                             <a
//                                 href="#!"
//                                 className="block px-4 py-2 text-sm hover:bg-[#a57f17a2] text-black hover:text-white" // Set hover background and text color
//                             >
//                                 {item.label}
//                             </a>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// }

// export default SortingButton;
import React, { useState } from 'react';

function SortingButton({ iconPath, title, items = [], onSelect }) {
    const [selectedItem, setSelectedItem] = useState(title);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleSelect = (item) => {
        setSelectedItem(item.label);
        onSelect(item.value); // Pass the selected value to the parent
        setDropdownOpen(false);
    };

    return (
        <div className="relative mr-4">
            <div
                tabIndex={0}
                role="button"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="w-32 bg-gray-300 border-2 border-[#A57E17] hover:bg-gray-200 rounded-xl shadow-xl font-semibold text-[#A57E17] flex items-center justify-center"
                style={{ height: '2rem', lineHeight: '1.5rem', padding: '0 0.5rem', fontSize: '1rem' }}
            >
                <svg
                    className="w-4 h-4 mr-2 text-[#A57E17]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath} />
                </svg>
                {selectedItem}
            </div>
            {isDropdownOpen && (
                <ul
                    tabIndex={0}
                    className="dropdown-content mt-1 bg-white menu rounded-box z-[1] w-52 p-1 shadow absolute right-0"
                >
                    {items.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect(item)}
                            className="block px-4 py-2 text-sm cursor-pointer hover:bg-[#a57f17a2] text-black hover:text-white"
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SortingButton;
