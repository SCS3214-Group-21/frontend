import React from 'react';

function TextAreaField(props) {
    const { id, placeholder, name, height, value } = props;

    return (
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
                    height: ${height};
                    color: #000000;
                }
                
                .coolinput2 .input2:focus {
                    outline: none;
                }
            `}</style>
            <div className="coolinput2">
                <label htmlFor={id} className="text2">{name}</label>
                <textarea id={id} placeholder={placeholder} className="input2">{value}</textarea>
            </div>
        </div>
    )
}

export default TextAreaField;
