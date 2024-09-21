import React from "react";

function ContactUsForm() {
  return (
    <form className= "w-full flex flex-col gap-8 p-10 border-2 border-custom-primary rounded-2xl">
       <style jsx>{`
            .coolinput {
            display: flex;
            flex-direction: column;
            width: fit-content;
            position: static;
            /* max-width: 240px; */
          }
  
          .coolinput label.text {
            font-size: 0.75rem;
            color: #000000;
            font-weight: 700;
            position: relative;
            top: 0.5rem;
            margin: 0 0 0 7px;
            padding: 0 3px;
            background: #FFF8F5;
            width: fit-content;
          }
          
          .coolinput .input {
            padding: 11px 10px;
            font-size: 0.75rem;
            border: 2px #000000 solid;
            border-radius: 5px;
            background: #FFF8F5;
          }
          
          .coolinput .input:focus {
            outline: none;
          }
       `}</style>
      <div className="flex flex-col sm:flex-row w-full gap-8 sm:gap-[10%]">
        <div className="coolinput w-full sm:w-[45%]">
          <label for="input" className="text">Your Name</label>
          <input type="text" placeholder="Your Name" name="input" className="input" />
        </div>
        <div className="coolinput w-full sm:w-[45%]">
          <label for="input" className="text">Your Email</label>
          <input type="text" placeholder="Your Email" name="input" className="input" />
        </div>
      </div>
      <div className="coolinput w-full">
        <label for="input" className="text">Subject</label>
        <input type="text" placeholder="Subject" name="input" className="input" />
      </div>
      <div className="coolinput w-full">
        <label for="input" className="text">Message</label>
        <textarea type="text" placeholder="Message" name="input" className="input h-60"></textarea>
      </div>
      <div className="w-full">
        <button className="border-0 rounded-full w-24 h-10 bg-custom-primary text-white transition-all duration-[600ms] ease-in-out font-semibold hover:border-2 hover:text-custom-secondary hover:border-custom-secondary hover:bg-custom-gray relative justify-center float-right">
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactUsForm;
