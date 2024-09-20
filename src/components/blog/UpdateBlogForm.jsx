import React, { useState } from 'react';
import InputField2 from '../ui/InputField2';
import PrimaryNoneFillButton from '../ui/PrimaryNoneFillButton';
import PrimaryButton from '../ui/PrimaryButton';
import FileInputField from '../ui/FileInputField';
import TextAreaField from '../ui/TextAreaField';

function UpdateBlogForm() {
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log("Selected file:", file);
    };
    return (
        <div>
            <form className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 pb-5'>
                <div className='flex flex-col md:flex-row gap-5 lg:gap-20 w-full p-3 px-5 md:px-[5%]'>
                    <div className='w-full'>

                        <InputField2
                            id="title"
                            name="title"
                            placeholder="Input"
                            type="text"
                            value={"Love in Full Blooms - Navigating the Delicate Petals of Romance"}

                        />
                    </div>

                    <div className='w-full'>

                        <div>
                            <style jsx>{`
                                .file-input-container {
                                    display: flex;
                                    flex-direction: column;
                                    width: 100%;
                                    position: relative;
                                }

                                .file-input-label {
                                    font-size: 1rem;
                                    color: #000000;
                                    font-weight: 500;
                                    position: relative;
                                    top: 0.5rem;
                                    margin: 0 0 0 7px;
                                    padding: 0 3px;
                                    background: #FFF8F5;
                                    width: fit-content;
                                }

                                .file-input {
                                    width: 100%;
                                    padding: 11px 10px;
                                    font-size: 1rem;
                                    border: 1px #000000 solid;
                                    border-radius: 5px;
                                    background: #FFF8F5;
                                    color: #000000;
                                }

                                .file-input::file-selector-button {
                                    padding: 5px 10px;
                                    font-size: 0.75rem;
                                    border: none;
                                    background-color: #A57E17; /* custom-primary */
                                    color: white;
                                    border-radius: 5px;
                                    cursor: pointer;
                                    transition: background-color 0.3s;
                                }

                                .file-input::file-selector-button:hover {
                                    background-color: #006972; /* custom-secondary */
                                }
                            `}</style>
                            <div className="file-input-container">
                                <label htmlFor="file-upload" className="file-input-label">Image</label>
                                <input
                                    id="file-upload"
                                    name="image"
                                    type="file"
                                    accept=".png, .jpg"
                                    className="file-input"

                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-80 p-3 px-5 md:px-[5%]">
                    <div>
                        <style jsx>{`
                            .coolinput2 {
                                display: flex;
                                flex-direction: column;
                                width: 100%;
                                position: static;
                            }
                    
                            .coolinput2 label.text2 {
                                font-size: 1rem;
                                color: #000000;
                                font-weight: 500;
                                position: relative;
                                top: 0.5rem;
                                margin: 0 0 0 7px;
                                padding: 0 3px;
                                background: #FFF8F5;
                                width: fit-content;
                            }
                            
                            .coolinput2 .input2 {
                                padding: 11px 10px;
                                font-size: 1rem;
                                border: 1px #000000 solid;
                                border-radius: 5px;
                                background: #FFF8F5;
                                height: 250px;
                                color: #000000;
                                width: 100%; /* Ensure it occupies full width */
                            }
                            
                            .coolinput2 .input2:focus {
                                outline: none;
                            }
                        `}</style>
                        <div className="coolinput2">
                            <label htmlFor="text-input" className="text2">Description</label>
                            <textarea
                                id="text-input"
                                placeholder="..."
                                className="input2"
                                name="description"
                                value={"On October 22, 2020, Neville arrived at a house gathering, and Chelsie opened the door for him. Instantly he thought, “Man, this girl’s beautiful. She’s amazing.” They talked a little at the gathering, but nothing came of it that night. A few days later, Neville reached out to Chelsie, and they got the chance to bond over their love for music and sports. It felt like they had known each other forever. After about a month, they were officially a couple. A year and a half later, Neville asked Chelsie to become his wife. This fun-loving couple tied the knot in an elegant, black-and-white wedding ceremony, followed by a reception that went viral! See all of the details of this wedding featured in the spring 2024 issue of Black Bride Magazine, and captured by Jamaal McKenzie and Paul McFall IV of Capital Films DC."}

                            />
                        </div>
                    </div>
                </div>

                <div className='flex flex-wrap justify-end items-center gap-2 sm:gap-5 p-3 px-5 md:px-[5%]'>
                    <PrimaryNoneFillButton
                        text={"Reset"}
                        link={"/"}
                    />

                    {/* <PrimaryButton
                        text={"Save Changes"}
                        link={"/"}
                    /> */}
                    <button
                        type="submit"
                        className="border-0 rounded-full px-8 h-10 bg-custom-primary text-white transition-all duration-[600ms] ease-in-out font-semibold hover:bg-custom-gray hover:text-custom-secondary hover:border-2 hover:border-custom-secondary"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UpdateBlogForm;
