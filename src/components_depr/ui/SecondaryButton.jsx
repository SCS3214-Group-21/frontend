import React from "react";
import { useNavigate } from "react-router-dom";

function SecondaryButton(props) {
  const Navigate = useNavigate();
  return (
    <button onClick={() => Navigate(props.link)} className="border-0 rounded-full px-8 h-10 bg-custom-secondary text-white transition-all duration-[600ms] ease-in-out font-semibold hover:bg-custom-gray hover:from-custom-gray hover:via-custom-gray hover:to-custom-gray hover:text-custom-primary hover:border-2 hover:border-custom-primary">
      {props.text}
    </button>
  );
}

export default SecondaryButton;
