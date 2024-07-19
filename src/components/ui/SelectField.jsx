import React from 'react';

function SelectField(props) {
    const { id, name, options } = props;

    return (
        <div>
            <style jsx>{`
                .coolinput3 {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    position: static;
                }
        
                .coolinput3 label.text3 {
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
                
                .coolinput3 .input3 {
                    padding: 11px 10px;
                    font-size: 0.75rem;
                    border: 2px #000000 solid;
                    border-radius: 5px;
                    background: #FFF8F5;
                    height: 100%;
                    color: #000000;
                }
                
                .coolinput3 .input3:focus {
                    outline: none;
                }
            `}</style>
            <div className="coolinput3">
                <label htmlFor={id} className="text3">{name}</label>
                <select id={id} className="input3">
                    {options && options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default SelectField;
