import React from 'react';


export default function SidebarButton(props) {
    const { href, iconPath, label, notificationCount, isOpen, isActive } = props
    return (
        <li>
            <a
                href={href}
                className={`flex items-center p-2 text-gray-900 rounded-lg group ${isActive ? 'bg-[#F0DFD7]' : 'hover:bg-[#F0DFD7]'}`}
            >
                <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath} />
                </svg>
                <span className={`ms-3 ${isOpen ? 'block' : 'hidden'} md:block`}>{label}</span>
                {notificationCount !== undefined && notificationCount > 0 && (
                    <span className={`inline-flex items-center justify-center ms-1 mr-2 text-sm font-medium ${isActive ? 'bg-pink-700' : 'bg-blue-100'} rounded-full w-6 h-6 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
                        {notificationCount}
                    </span>
                )}
            </a>
        </li>
    );
}



SidebarButton.defaultProps = {
    notificationCount: undefined,
    isActive: false,
};