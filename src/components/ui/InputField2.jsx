import React from 'react';

function InputField2(props) {
    const { id, type, placeholder, name } = props;

    return (
        <div>
            <style jsx>{`
                .coolinput {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    position: static;
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
                    height: 100%;
                    color: #000000; /* Set text color to black */
                }
                
                .coolinput .input:focus {
                    outline: none;
                }
            `}</style>
            <div className="coolinput">
                <label htmlFor={id} className="text">{name}</label>
                <input id={id} type={type} placeholder={placeholder} name="input" className="input" />
            </div>
        </div>
    )
}

export default InputField2;
