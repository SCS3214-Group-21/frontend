import React from "react";
import PrimaryButton from "../ui/PrimaryButton.jsx";



function RatingCard({ user, rating, comment, date, onApprove, onDelete }) {

    return (

<div className="p-4 bg-white rounded-lg shadow-md border border-[#FFDBC8]">


      <h2 className="text-xl font-bold text-custom-primary mb-2">User: {user}</h2>


      <p className="text-lg text-gray-700 mb-1">Rating: ⭐ {rating}</p>

      <p className="text-sm text-gray-600 mb-4">"{comment}"</p>

      <p className="text-xs text-gray-500 mb-4">Date: {date}</p>

      <div className="flex justify-between">


        <PrimaryButton text="Approve" onClick={onApprove} />

        <PrimaryButton text="Delete" onClick={onDelete} />


      </div>


    </div>

);


}



export default RatingCard;
