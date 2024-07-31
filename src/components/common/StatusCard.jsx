import React from "react";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";
import CustomPinkButton from "../ui/CustomPinkButton";

function SectionCard(props) {
  const { title, subtitle, paragraph, button, button2, button3, link, link2, link3 } = props;

  return (
    <div className="z-10 p-10 w-72 sm:w-[30rem] md:w-[40rem] bg-white rounded-3xl shadow-custom-inset bg-opacity-50 backdrop-blur-sm">
      <h1 className="text-black font-sans font-normal text-2xl sm:text-5xl">
        {title} <span className="text-custom-primary">{subtitle}</span>
      </h1>
      <br />
      <p className="text-black font-sans text-xl sm:text-2xl">{paragraph}</p>
      <br />
      {button ? (
        <PrimaryButton text={button} link={link}></PrimaryButton>
      ) : button2 ? (
        <SecondaryButton text={button2} link={link2}></SecondaryButton>
      ) : (
        <CustomPinkButton text={button3} link={link3}></CustomPinkButton>
      )}
    </div>
  );
}

export default SectionCard;
