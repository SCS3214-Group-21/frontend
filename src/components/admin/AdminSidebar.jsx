import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import SidebarButton from '../ui/SidebarButton';

export default function AdminSidebar() {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    //const location = useLocation(); // Use useLocation to get the current path

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    const isDashboardPage = location.pathname === '/admin/dashboard';
    const isTransactionsPage = location.pathname === '/' || location.pathname === '/' || location.pathname === '/';
    const isManagePage = location.pathname === '/admin/manageusers' || location.pathname === '/';//rename actual path
    const isNotificationPage = location.pathname === '/';//rename actual path
    const isMessagesPage = location.pathname === '/' || location.pathname === '/';//rename actual path
    const isBlogsPage = location.pathname === '/admin/blogs/createblog' || location.pathname === '/admin/blogs' || location.pathname === '/admin/blogs/acceptblogs';//rename actual path
    const isFeedbacksPage = location.pathname === '/' || location.pathname === '/';//rename actual path

    //const isLogoutPage = location.pathname === '/';//rename actual path




    return (
        <>
            {/* menu icon for small screens */}
            <button
                onClick={toggleDrawer}
                className="fixed z-50 block p-2 sm:hidden top-12 left-3"
            >
                {/*<img src={menuIcon} alt="Menu Icon" className="w-6 h-6" />*/}

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
                            href="/admin/dashboard"
                            iconPath="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm16 14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2ZM4 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Zm16-2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6Z"
                            label="Dashboard"
                            isOpen={isDrawerOpen}
                            isActive={isDashboardPage}

                        />

                        <SidebarButton
                            href="/admin/manageusers"
                            iconPath="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                            label="Manage Users"
                            isOpen={isDrawerOpen}
                            isActive={isManagePage}
                        />

                        <SidebarButton
                            href="/admin/Transactions"
                            iconPath="M13.6 16.733c.234.269.548.456.895.534a1.4 1.4 0 0 0 1.75-.762c.172-.615-.446-1.287-1.242-1.481-.796-.194-1.41-.861-1.241-1.481a1.4 1.4 0 0 1 1.75-.762c.343.077.654.26.888.524m-1.358 4.017v.617m0-5.939v.725M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
                            label="Transactions"
                            isOpen={isDrawerOpen}
                            isActive={isTransactionsPage}
                        />

                        <SidebarButton
                            href="#"
                            iconPath="m10.827 5.465-.435-2.324m.435 2.324a5.338 5.338 0 0 1 6.033 4.333l.331 1.769c.44 2.345 2.383 2.588 2.6 3.761.11.586.22 1.171-.31 1.271l-12.7 2.377c-.529.099-.639-.488-.749-1.074C5.813 16.73 7.538 15.8 7.1 13.455c-.219-1.169.218 1.162-.33-1.769a5.338 5.338 0 0 1 4.058-6.221Zm-7.046 4.41c.143-1.877.822-3.461 2.086-4.856m2.646 13.633a3.472 3.472 0 0 0 6.728-.777l.09-.5-6.818 1.277Z"
                            label="Notifications"
                            isOpen={isDrawerOpen}
                            isActive={isNotificationPage}
                        />
                        {/* <SidebarButton
                            href="/"
                            iconPath="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                            label="Messages"
                            isOpen={isDrawerOpen}
                            isActive={isMessagesPage}
                            messagesCount="4"
                        /> */}

                        <SidebarButton
                            href="/admin/blogs"
                            iconPath="M11 9h6m-6 3h6m-6 3h6M6.996 9h.01m-.01 3h.01m-.01 3h.01M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                            label="Blogs"
                            isOpen={isDrawerOpen}
                            isActive={isBlogsPage}

                        />
                        <SidebarButton
                            href="/admin/feedback"
                            iconPath="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"
                            label="Feedbacks"
                            isOpen={isDrawerOpen}
                            isActive={isFeedbacksPage}

                        />
                        <SidebarButton
                            href="/admin/logout"
                            iconPath="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
                            label="Logout"
                            isOpen={isDrawerOpen}


                        />

                    </ul>
                </div>
            </div>
        </>
    );
}
