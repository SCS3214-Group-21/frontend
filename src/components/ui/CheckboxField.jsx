import React, { useState, useEffect } from 'react';

function CheckboxField({ id, label, checked, onChange }) {
  const [isChecked, setIsChecked] = useState(checked || false);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    if (onChange) {
      onChange(newCheckedState);
    }
  };

  return (
    <div className="flex items-center">
      {/* Custom Styled Checkbox */}
      <div
        onClick={handleCheckboxChange}
        className={`h-5 w-5 flex items-center justify-center cursor-pointer rounded ${isChecked ? "bg-custom-primary" : "bg-custom-gray border-black border"} transition-colors duration-300`}
      >
        {isChecked && (
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      {label && (
        <label htmlFor={id} className="ml-5 text-black font-semibold">
          {label}
        </label>
      )}
    </div>
  );
}

export default CheckboxField;
