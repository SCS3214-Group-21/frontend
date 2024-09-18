import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import SidebarButton from '../ui/SidebarButton';


export default function VendorSidebar() {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const location = useLocation(); // Use useLocation to get the current pat

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    const isDashboard = location.pathname === '/vendor/dashboard';
    const isProfilePage = location.pathname === '/vendor/profile';//rename actual path
    const isPackagesPage = location.pathname === '/vendor/packages' || location.pathname === '/vendor/packages/viewpackage' || location.pathname === '/vendor/packages/createpackage' || location.pathname === '/vendor/packages/updatepackage';//rename actual path
    const isNotificationPage = location.pathname === '/vendor/notification';//rename actual path
    const isMessagesPage = location.pathname === '/vendor/messages' || location.pathname === '/vendor/messages/chat';//rename actual path
    const isSchedulePage = location.pathname === '/vendor/schedule';//rename actual path
    const isOrdersPage = location.pathname === '/';//rename actual path
    const isHistoryPage = location.pathname === '/';//rename actual path
    const isBlogsPage = location.pathname === '/vendor/blog' || location.pathname === '/vendor/blog/viewmyblog' || location.pathname === '/vendor/blog/createblog';//rename actual path
    const isReviewsPage = location.pathname === '/';//rename actual path
    const isLogoutPage = location.pathname === '/';//rename actual path


    return (
        <>
            {/* menu icon for small screens */}
            <button
                onClick={toggleDrawer}
                className="fixed z-50 block p-2 sm:hidden top-12 left-3"
            >
                <svg class="w-6 h-6 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10" />
                </svg>

            </button>

            {/* Drawer */}
            <div
                id="drawer-navigation"
                className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto bg-white transition-transform transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
                    } sm:translate-x-0 sm:w-20 md:w-64 ${isDrawerOpen ? 'w-64' : 'w-20'}`}
            >
                <div className="py-2 my-2 mt-24 overflow-y-auto">
                    <ul className="space-y-3 font-medium">

                        <SidebarButton
                            href="/vendor/dashboard"
                            iconPath="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm16 14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2ZM4 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Zm16-2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6Z"
                            label="Dashboard"
                            isOpen={isDrawerOpen}
                            isActive={isDashboard}
                        />

                        <SidebarButton
                            href="/vendor/profile"
                            iconPath="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            label="Profile"
                            isOpen={isDrawerOpen}
                            isActive={isProfilePage}
                        />

                        <SidebarButton
                            href="/vendor/packages"
                            iconPath="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01"
                            label="Packages"
                            isOpen={isDrawerOpen}
                            isActive={isPackagesPage}
                        />

                        <SidebarButton
                            href="/vendor/notification"
                            iconPath="m10.827 5.465-.435-2.324m.435 2.324a5.338 5.338 0 0 1 6.033 4.333l.331 1.769c.44 2.345 2.383 2.588 2.6 3.761.11.586.22 1.171-.31 1.271l-12.7 2.377c-.529.099-.639-.488-.749-1.074C5.813 16.73 7.538 15.8 7.1 13.455c-.219-1.169.218 1.162-.33-1.769a5.338 5.338 0 0 1 4.058-6.221Zm-7.046 4.41c.143-1.877.822-3.461 2.086-4.856m2.646 13.633a3.472 3.472 0 0 0 6.728-.777l.09-.5-6.818 1.277Z"
                            label="Notifications"
                            isOpen={isDrawerOpen}
                            isActive={isNotificationPage}
                        />

                        <SidebarButton
                            href="/vendor/messages"
                            iconPath="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                            label="Messages"
                            isOpen={isDrawerOpen}
                            isActive={isMessagesPage}
                        />
                        <SidebarButton
                            href="#"
                            iconPath="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            label="Orders"
                            isOpen={isDrawerOpen}
                            isActive={isOrdersPage}
                        />

                        <SidebarButton
                            href="/vendor/schedule"
                            iconPath="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                            label="Schedule"
                            isOpen={isDrawerOpen}
                            isActive={isSchedulePage}
                        />



                        {/* <SidebarButton
                            href="#"
                            iconPath="M18.5 4h-13m13 16h-13M8 20v-3.333a2 2 0 0 1 .4-1.2L10 12.6a1 1 0 0 0 0-1.2L8.4 8.533a2 2 0 0 1-.4-1.2V4h8v3.333a2 2 0 0 1-.4 1.2L13.957 11.4a1 1 0 0 0 0 1.2l1.643 2.867a2 2 0 0 1 .4 1.2V20H8Z"
                            label="History"
                            isOpen={isDrawerOpen}
                            isActive={isHistoryPage}
                        />

                        <SidebarButton
                            href="#"
                            iconPath="M4 4v15a1 1 0 0 0 1 1h15M8 16l2.5-5.5 3 3L17.273 7 20 9.667"
                            label="Analytics"
                            isOpen={isDrawerOpen}
                            isActive={isAnalyticsPage}
                        /> */}

                        <SidebarButton
                            href="/vendor/blog"
                            iconPath="M11 9h6m-6 3h6m-6 3h6M6.996 9h.01m-.01 3h.01m-.01 3h.01M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                            label="Blogs"
                            isOpen={isDrawerOpen}
                            isActive={isBlogsPage}

                        />

                        <SidebarButton
                            href="#"
                            iconPath="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                            label="Reviews"
                            isOpen={isDrawerOpen}
                            isActive={isReviewsPage}
                        />

                        <SidebarButton
                            href="/login"
                            iconPath="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
                            label="Logout"
                            isOpen={isDrawerOpen}
                            isActive={isLogoutPage}
                        />
                    </ul>
                </div>
            </div>
        </>
    );
}
