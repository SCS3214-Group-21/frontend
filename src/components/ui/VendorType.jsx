import React from "react";

function VendorType(props) {
    const {img, name} = props;
  return (
    <div>
        <style jsx>{`
        /* custom-checkbox.css */
.custom-checkbox {
  appearance: none;
  width: 1rem;
  height: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  background-color: #f8f9fa;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.custom-checkbox:checked {
  background-color: #4a5568; /* Tailwind's gray-700 */
  border-color: #4a5568; /* Tailwind's gray-700 */
}

.custom-checkbox:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.6); /* Tailwind's blue-400 */
}

        `}</style>
        <div className="flex flex-row items-center justify-between w-80 rounded-xl border p-5">
        <input type="checkbox" className="custom-checkbox" />
        <h1 className="text-custom-secondary font-normal text-lg sm:text-xl">
            {name}
        </h1>
        <img
            src={img}
            alt="Img01"
            className="w-10 h-10 rounded-full"
        />
        </div>
    </div>
  );
}

export default VendorType;
