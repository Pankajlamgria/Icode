import React, { useContext, useState } from "react";
import "../css/output.css";
import icodecontext from "../context/Icodecontext";
const Output = () => {
  const contextcontent = useContext(icodecontext);
  return (
    <div className="outputCover">
      <div className="Output">
        <h4>Output:</h4>
        <div className='outputBox'>
          <textarea
            name=""
            id="OutputTextArea"
            cols="30"
            rows="20"
            readOnly={true}
            value={contextcontent.result}
          ></textarea>
        </div>
        <div className="inputBox">
          <h3>Input:</h3>
          <textarea name="inputArea" id="InputTextArea" cols="30" rows="20" value={contextcontent.input} onInput={e=>contextcontent.setinput(e.target.value)}></textarea>
        </div>
      </div>
    </div>
  );
};

export default Output;
