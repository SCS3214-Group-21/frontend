
import React from "react";

import PrimaryButton from "../ui/PrimaryButton.jsx";


function NotificationCard({ title, content, date, read, onToggleRead, onDelete }) {

    return (

<div className={`p-4 bg-white rounded-lg shadow-md border ${read ? "border-green-500" : "border-red-500"}`}>

      <h2 className="text-xl font-bold text-custom-primary mb-2">{title}</h2>


      <p className="text-sm text-gray-600 mb-4">{content}</p>

      <p className="text-xs text-gray-500 mb-4">Date: {date}</p>

      <div className="flex justify-between">

        <PrimaryButton text={read ? "Mark as Unread" : "Mark as Read"} onClick={onToggleRead} />

        <PrimaryButton text="Delete" onClick={onDelete} />

      </div>


    </div>

);

}

export default NotificationCard;
