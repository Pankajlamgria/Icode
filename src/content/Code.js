import React from 'react'
import '../css/code.css';
import CodeEditor from './CodeEditor';
import Output from "./Output";
const Code = () => {
  return (
    <div className='Box'>
        <CodeEditor/>
        <Output/>
    </div>
  )
}

export default Code
