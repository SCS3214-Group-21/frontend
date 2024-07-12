import React from "react";

function SecondaryButton(props) {
  return (
    <button className="border-0 rounded-full px-8 h-10 bg-gradient-to-r from-custom-blue-light via-custom-secondary to-custom-blue-dark text-white transition-all duration-[600ms] ease-in-out font-semibold hover:bg-custom-gray hover:from-custom-gray hover:via-custom-gray hover:to-custom-gray hover:text-custom-primary hover:border-2 hover:border-custom-primary">
      {props.text}
    </button>
  );
}

export default SecondaryButton;
