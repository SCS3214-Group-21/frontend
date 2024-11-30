import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

function InputField2(props) {
    const { id, type, placeholder, name, value, onChange } = props;

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
                    font-size: 1rem;
                    color: #000000;
                    font-weight: 500;
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
                    font-size: 1rem;
                    border: 1px #000000 solid;
                    border-radius: 5px;
                    background: #FFF8F5;
                    height: 100%;
                    color: #000000;
                }
                .coolinput .input::placeholder {
                    color: #888888;
                }
                .coolinput .input:focus {
                    outline: none;
                }
                .coolinput .icon {
                    position: absolute;
                    top: 50%;
                    right: 10px;
                    transform: translateY(-50%);
                    color: #888888;
                    pointer-events: none;
                }
            `}</style>
            <div className="coolinput">
                <label htmlFor={id} className="text">{name}</label>
                <div className="input-wrapper">
                    {type === 'date' ? (
                        <>
                            <DatePicker
    selected={value ? new Date(value) : null}
    onChange={(date) =>
        onChange({
            target: {
                value: date ? date.toISOString().split('T')[0] : '',
                name,
            },
        })
    }
    className="input"
    placeholderText={placeholder}
    dateFormat="yyyy/MM/dd"
/>

                            <FaCalendarAlt className="icon" />
                        </>
                    ) : type === 'time' ? (
                        <>
                            <DatePicker
                                selected={value ? new Date(`1970-01-01T${value}`) : null}
                                onChange={(time) => onChange({ target: { value: time.toLocaleTimeString('en-US', { hour12: false }), name } })}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="HH:mm"
                                className="input"
                                placeholderText={placeholder}
                            />
                            <FaClock className="icon" />
                        </>
                    ) : (
                        <input
                            id={id}
                            type={type}
                            placeholder={placeholder}
                            value={value}
                            name={name}
                            className="input"
                            onChange={onChange}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default InputField2;
