import React from 'react';

function SortingButton(props) {
    const { iconPath, title, items = [] } = props;

    return (
        <div className="mr-12"> {/* Add margin-right to create a gap between buttons */}
            <div className="text-black dropdown">
                <div
                    tabIndex={0}
                    role="button"
                    className="w-24 bg-none border-2 border-[#A57E17] hover:bg-gray-200 rounded-xl shadow-xl font-semibold text-[#A57E17] flex items-center justify-center"
                    style={{ height: '1.5rem', lineHeight: '1rem', padding: '0 0.25rem', fontSize: '0.75rem' }} // Adjusting height, line-height, padding, and font size
                >
                    <svg className="w-3 h-3 mr-2 text-[#A57E17]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath} />
                    </svg>
                    {title}
                </div>
                <ul
                    tabIndex={0}
                    className="dropdown-content mt-1 bg-white menu rounded-box z-[1] w-52 p-1 shadow "
                >
                    {items.map((item, index) => (
                        <li key={index}>
                            <a
                                href="#!"
                                //  onClick={() => handleSort(item)}
                                className="block px-4 py-2 text-sm hover:bg-gray-100"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SortingButton;
