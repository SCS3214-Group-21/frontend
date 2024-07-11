import React from "react";
import PrimaryButton from "../ui/PrimaryButton";

function SectionCard(props) {
  const { title, subtitle, paragraph, button } = props;

  return (
    <div className="z-10 p-10 w-72 sm:w-[30rem] md:w-[40rem] bg-white rounded-3xl shadow-custom-inset bg-opacity-50 backdrop-blur-sm">
      <h1 className="text-black font-sans font-normal text-4xl sm:text-5xl">
        {title} <span className="text-custom-primary">{subtitle}</span>
      </h1>
      <br />
      <p className="text-black font-sans text-xl sm:text-2xl">{paragraph}</p>
      <br />
      <PrimaryButton text={button}></PrimaryButton>
    </div>
  );
}

export default SectionCard;
