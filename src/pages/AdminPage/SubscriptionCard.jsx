import React from "react";

import PrimaryButton from "../ui/PrimaryButton.jsx";


function SubscriptionCard({ name, price, features, onDelete, onEdit }) {

    return (

<div className="p-4 bg-white rounded-lg shadow-md border border-[#FFDBC8]">

      <h2 className="text-xl font-bold text-custom-primary mb-2">{name}</h2>

      <p className="text-lg text-gray-700 mb-4">{price}</p>

      <ul className="text-sm text-gray-600 list-disc list-inside mb-4">
        {features.map((feature, index) => (

<li key={index}>{feature}</li>
        ))}


      </ul>

      <div className="flex justify-between">

        <PrimaryButton text="Edit" onClick={onEdit} />

        <PrimaryButton text="Delete" onClick={onDelete} />

      </div>

    </div>
  );
}

export default SubscriptionCard;
