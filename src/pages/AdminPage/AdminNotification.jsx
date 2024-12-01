
import React, { useState } from "react";

import Breadcrumb from "../../components/ui/Breadcrumb.jsx";

import NotificationCard from "../../components/common/NotificationCard.jsx";

import Pagination from "../../components/common/Pagination.jsx";

import AdminHeader from "../../components/common/AdminHeader.jsx";

import AdminSidebar from "../../components/admin/AdminSidebar.jsx";

import PrimaryNoneFillButton from "../../components/ui/PrimaryNoneFillButton.jsx";

import PrimaryButton from "../../components/ui/PrimaryButton.jsx";



// Sample notifications data

const notifications = [

    { id: 1, title: "System Maintenance", content: "Scheduled maintenance on Nov 30.", read: false, date: "2024-11-20" },

    { id: 2, title: "New Feature", content: "A new reporting feature has been added.", read: true, date: "2024-11-15" },

    { id: 3, title: "Policy Update", content: "Terms of Service have been updated.", read: false, date: "2024-11-10" },

    { id: 4, title: "Account Activity", content: "Your account was accessed from a new device.", read: true, date: "2024-11-05" },

    // Add more notifications for pagination

];




const renderItems = (currentItems, onToggleRead, onDelete) => (

<div className="flex flex-row flex-wrap items-center justify-center gap-6">

    {currentItems.map((notification) => (

<div key={notification.id} className="flex items-center justify-center p-2 bg-white h-auto w-80">


        <NotificationCard

title={notification.title}

content={notification.content}

date={notification.date}

read={notification.read}

onToggleRead={() => onToggleRead(notification.id)}

onDelete={() => onDelete(notification.id)}

/>

      </div>

))}

  </div>

);



function AdminNotificationPage() {

    const breadcrumbItems = [

        { label: "Dashboard", href: "/admindashboard" },

        { label: "Notifications" },

    ];



    const [notificationsData, setNotificationsData] = useState(notifications);



    const handleToggleRead = (id) => {

        const updatedNotifications = notificationsData.map((notification) =>

            notification.id === id ? { ...notification, read: !notification.read } : notification

        );

        setNotificationsData(updatedNotifications);

    };



    const handleDelete = (id) => {

        const updatedNotifications = notificationsData.filter((notification) => notification.id !== id);

        setNotificationsData(updatedNotifications);

    };


 
    return (
 
 <div>

      <AdminHeader />

      <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">

        <div className="w-[5%] sm:w-[10%] md:w-[20%]">

          <AdminSidebar />

        </div>

        <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16">

          <div className="pb-5">

            <Breadcrumb items={breadcrumbItems} />

          </div>

          <div className="flex justify-between pb-5">

            <h1 className="text-4xl font-bold text-custom-primary">Notifications</h1>

            <div className="absolute flex flex-row p-4 mb-2 right-7">

              <PrimaryNoneFillButton text="Create Notification" link="/notifications/create" />

            </div>

          </div>

          <div className="pb-5">

            <div className="w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-row items-center justify-center gap-10 sm:gap-5 flex-wrap">

              <Pagination

items={notificationsData}

itemsPerPage={4}

renderItems={(currentItems) => renderItems(currentItems, handleToggleRead, handleDelete)}

/>

            </div>

          </div>

        </div>




      </div>



    </div>



);

}



export default AdminNotificationPage;
