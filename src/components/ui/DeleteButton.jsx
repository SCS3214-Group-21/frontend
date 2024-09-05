import React from "react";
import { useNavigate } from "react-router-dom";

function DeleteButton(props) {
  const Navigate = useNavigate();
  return (
    <button
      onClick={() => Navigate(props.link)}
      className="border-0 rounded-full px-8 h-10 bg-red-500 text-white transition-all duration-[600ms] ease-in-out font-semibold hover:bg-white hover:text-red-500 hover:border-2 hover:border-red-500"
    >
      {props.text}
    </button>
  );
}

export default DeleteButton;
