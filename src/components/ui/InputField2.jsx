import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';

function InputField2(props) {
    const { id, type, placeholder, name } = props;
    const [startDate, setStartDate] = useState(null);

    return (
        <div>
            <style jsx>{`
                .coolinput {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    position: relative;
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
                    z-index: 10;
                }

                .coolinput .input-wrapper {
                    position: relative;
                    width: 100%;
                }

                .coolinput .input {
                    width: 100%;
                    padding: 11px 10px;
                    font-size: 0.75rem;
                    border: 2px #000000 solid;
                    border-radius: 5px;
                    background: #FFF8F5;
                    height: 100%;
                    color: #000000; /* Set text color to black */
                }

                .coolinput .input::placeholder {
                    color: #888888; /* Customize placeholder color */
                }

                .coolinput .input:focus {
                    outline: none;
                }

                .coolinput .icon {
                    position: absolute;
                    top: 50%;
                    right: 10px;
                    transform: translateY(-50%);
                    color: #888888; /* Customize icon color */
                    pointer-events: none; /* Make the icon unclickable */
                }

                /* Custom styles for react-datepicker */
                .react-datepicker-wrapper,
                .react-datepicker__input-container,
                .react-datepicker__input-container input {
                    width: 100%;
                }

                .react-datepicker__input-container input {
                    padding: 11px 10px;
                    font-size: 0.75rem;
                    border: 2px #000000 solid;
                    border-radius: 5px;
                    background: #FFF8F5;
                    color: #000000;
                }

                .react-datepicker__input-container input::placeholder {
                    color: #888888;
                }

                .react-datepicker__input-container input:focus {
                    outline: none;
                }
                /* General styles for the date picker */
                .react-datepicker {
                    border: none;

                }

                /* Header styles */
                .react-datepicker__header {
                    background-color: #A57E17; /* custom-primary */
                    border-bottom: 1px solid #A57E17; /* custom-primary */
                }

                /* Navigation styles */
                .react-datepicker__navigation--previous, .react-datepicker__navigation--next {
                    top: 10px;
                    line-height: 1.7rem;
                }

                .react-datepicker__navigation--previous {
                    border-right-color: #A57E17; /* custom-primary */
                }

                .react-datepicker__navigation--next {
                    border-left-color: #A57E17; /* custom-primary */
                }

                /* Day styles */
                .react-datepicker__day {
                    color: #000000; /* default text color */
                }

                .react-datepicker__day:hover {
                    background-color: #006972; /* custom-secondary */
                    color: #FFFFFF; /* white */
                    border-radius: 50%;
                }

                .react-datepicker__day--selected, .react-datepicker__day--selected:hover {
                    background-color: #A57E17; /* custom-primary */
                    color: #FFFFFF; /* white */
                    border-radius: 50%;
                }

                /* Month container styles */
                .react-datepicker__month-container {
                    background-color: #FFFFFF;
                }

                /* Input styles */
                .react-datepicker__input-container input {
                    width: 100%;
                    padding: 11px 10px;
                    font-size: 0.75rem;
                    border: 2px #000000 solid;
                    border-radius: 5px;
                    background: #FFF8F5;
                    color: #000000;
                }

            `}</style>
            <div className="coolinput">
                <label htmlFor={id} className="text">{name}</label>
                <div className="input-wrapper">
                    {type === 'date' ? (
                        <React.Fragment>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                className="input"
                                placeholderText={placeholder}
                                dateFormat="yyyy/MM/dd"
                            />
                            <FaCalendarAlt className="icon" />
                        </React.Fragment>
                    ) : (
                        <input id={id} type={type} placeholder={placeholder} name="input" className="input" />
                    )}
                </div>
            </div>
        </div>
    );
}

export default InputField2;
