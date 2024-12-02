import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import SidebarButton from '../ui/SidebarButton';
import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthContext';

export default function ClientSidebar() {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const location = useLocation(); // Use useLocation to get the current path

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    const isMyWeddingPage = location.pathname === '/client/mywedding';
    const isVendorsPage = location.pathname === '/client/vendors' || location.pathname === '/client/vendors/hotels' || location.pathname === '/client/vendors/hoteldetails' || location.pathname === '/client/alljewellery' || location.pathname === '/client/alldressers' || location.pathname === '/client/viewdressing' || location.pathname === '/allphotographers' || location.pathname === '/viewjewellery' || location.pathname === '/floraldetails' || location.pathname === '/allflorals';
    const isBudgetPage = location.pathname === '/client/budget' || location.pathname === '/client/planbudget' || location.pathname === '/client/viewbudget';//rename actual path
    const isNotificationPage = location.pathname === '/client/notification';//rename actual path
    const isMessagesPage = location.pathname === '/client/messages' || location.pathname === '/client/messages/chat';//rename actual path
    const isCalendarPage = location.pathname === '/client/calendar';//rename actual path
    const isBookingsPage = location.pathname === '/client/bookings' || location.pathname === '/client/bookings/bookingdetails';//rename actual path
    const isBlogsPage = location.pathname === '/client/blogs' || location.pathname === '/client/blogs/viewblog';//rename actual path
    const isLogoutPage = location.pathname === '/client/logout';//rename actual path
    const isQuotationPage = location.pathname === '/client/quotation';//rename actual path



    return (
        <>
            {/* menu icon for small screens */}
            <button
                onClick={toggleDrawer}
                className="fixed z-50 block p-2 sm:hidden top-12 left-3"
            >
                {/*<img src={menuIcon} alt="Menu Icon" className="w-6 h-6" />*/}

                <svg className="w-6 h-6 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10" />
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
                            href="/client/mywedding"
                            iconPath="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm16 14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2ZM4 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Zm16-2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6Z"
                            label="My Wedding"
                            isOpen={isDrawerOpen}
                            isActive={isMyWeddingPage}

                        />
                        <SidebarButton
                            href="/client/budget"
                            iconPath="M13.6 16.733c.234.269.548.456.895.534a1.4 1.4 0 0 0 1.75-.762c.172-.615-.446-1.287-1.242-1.481-.796-.194-1.41-.861-1.241-1.481a1.4 1.4 0 0 1 1.75-.762c.343.077.654.26.888.524m-1.358 4.017v.617m0-5.939v.725M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
                            label="Budget"
                            isOpen={isDrawerOpen}
                            isActive={isBudgetPage}
                        />
                        <SidebarButton
                            href="/client/vendors"
                            iconPath="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z"
                            label="Vendors"
                            isOpen={isDrawerOpen}
                            isActive={isVendorsPage}
                        />
                        
                         <SidebarButton
                            href="/client/quotation"
                            iconPath="m11.0001 18-.8536-.8536c-.0937-.0937-.1464-.2209-.1464-.3535v-4.4172c0-.2422-.08794-.4762-.24744-.6585L4.45127 5.6585C3.88551 5.01192 4.34469 4 5.20385 4H18.7547c.8658 0 1.3225 1.02544.7433 1.66896L16.5001 9m-2.5 9.3754c.3347.3615.7824.6134 1.2788.7195.4771.1584 1.0002.1405 1.464-.05.4638-.1906.8338-.5396 1.0356-.977.2462-.8286-.6363-1.7337-1.7735-1.9948-1.1372-.2611-2.016-1.1604-1.7735-1.9948.2016-.4375.5716-.7868 1.0354-.9774.4639-.1905.9871-.2082 1.4643-.0496.491.1045.9348.3517 1.2689.7067m-1.9397 5.41V20m0-8v.9771"
                            label="Quotation"
                            isOpen={isDrawerOpen}
                            isActive={isQuotationPage}
                        /> 
                        <SidebarButton
                            href="/client/notification"
                            iconPath="m10.827 5.465-.435-2.324m.435 2.324a5.338 5.338 0 0 1 6.033 4.333l.331 1.769c.44 2.345 2.383 2.588 2.6 3.761.11.586.22 1.171-.31 1.271l-12.7 2.377c-.529.099-.639-.488-.749-1.074C5.813 16.73 7.538 15.8 7.1 13.455c-.219-1.169.218 1.162-.33-1.769a5.338 5.338 0 0 1 4.058-6.221Zm-7.046 4.41c.143-1.877.822-3.461 2.086-4.856m2.646 13.633a3.472 3.472 0 0 0 6.728-.777l.09-.5-6.818 1.277Z"
                            label="Notifications"
                            isOpen={isDrawerOpen}
                            isActive={isNotificationPage}
                        />
                        <SidebarButton
                            href="/client/messages"
                            iconPath="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                            label="Messages"
                            isOpen={isDrawerOpen}
                            isActive={isMessagesPage}
                            messagesCount="4"
                        />
                        <SidebarButton
                            href="/client/calendar"
                            iconPath="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                            label="Calendar"
                            isOpen={isDrawerOpen}
                            isActive={isCalendarPage}

                        />
                        <SidebarButton
                            href="/client/bookings"
                            iconPath="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z"
                            label="Bookings"
                            isOpen={isDrawerOpen}
                            isActive={isBookingsPage}

                        />
                        <SidebarButton
                            href="/client/blogs"
                            iconPath="M11 9h6m-6 3h6m-6 3h6M6.996 9h.01m-.01 3h.01m-.01 3h.01M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                            label="Blogs"
                            isOpen={isDrawerOpen}
                            isActive={isBlogsPage}

                        />
                        {/* <SidebarButton
                            href="#"
                            iconPath="m4.988 19.012 5.41-5.41m2.366-6.424 4.058 4.058-2.03 5.41L5.3 20 4 18.701l3.355-9.494 5.41-2.029Zm4.626 4.625L12.197 6.61 14.807 4 20 9.194l-2.61 2.61Z"
                            label="Card designs"
                            isOpen={isDrawerOpen}
                            isActive={isCardDesignsPage}

                        />*/}
                        <SidebarButton
                            href="/client/logout"
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
