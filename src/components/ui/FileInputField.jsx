import React from "react";

function FileInputField(props) {
  const { id, name, accept, onChange } = props;

  return (
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
          background: #fff8f5;
          width: fit-content;
        }

        .file-input {
          width: 100%;
          padding: 11px 10px;
          font-size: 1rem;
          border: 1px #000000 solid;
          border-radius: 5px;
          background: #fff8f5;
          color: #000000;
        }

        .file-input::file-selector-button {
          padding: 5px 10px;
          font-size: 0.75rem;
          border: none;
          background-color: #a57e17; /* custom-primary */
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
        {name && (
          <label htmlFor={id} className="file-input-label">
            {name}
          </label>
        )}
        <input
          id={id}
          type="file"
          accept={accept}
          className="file-input"
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default FileInputField;
