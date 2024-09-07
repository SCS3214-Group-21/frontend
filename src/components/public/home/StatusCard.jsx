import React from "react";
import PrimaryButton from './ui/PrimaryButton.jsx'
import SecondaryButton from './ui/SecondaryButton.jsx'
import CustomPinkButton from './ui/CustomPinkButton.jsx'

function SectionCard(props) {
  const { title, subtitle, paragraph, button, button2, button3, link, link2, link3 } = props;

  return (
    <div className="block max-w-fit p-4 bg-white bg-opacity-25 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="p-2">
        <h5 className="mb-2 max-w-[480px] text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title} <span className="text-custom-primary">{subtitle}</span>
      </h5>
      </div>
      <div className="max-w-[480px] p-2">
        <p className="font-normal text-gray-700 dark:text-gray-400">{paragraph}</p>
      </div>
      <div className="p-2">
          {button ? (
            <PrimaryButton text={button} link={link}></PrimaryButton>
          ) : button2 ? (
            <SecondaryButton text={button2} link={link2}></SecondaryButton>
          ) : (
            <CustomPinkButton text={button3} link={link3}></CustomPinkButton>
          )}
      </div>
    </div>
  );
}

export default SectionCard;

// z-10 p-10 w-72 sm:w-[30rem] md:w-[40rem] bg-white rounded-3xl shadow-custom-inset bg-opacity-50 backdrop-blur-sm
// text-black font-sans font-normal text-2xl sm:text-5xl
// mb-8 max-w-[480px] text-black font-sans text-xl sm:text-2xl