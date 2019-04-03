import React from "react";

const TextArea = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        id={name}
        className="form-control"
        style={{resize: 'none'}}
        
        
      />
     {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default TextArea;
