import React, { useContext, useState } from 'react'
import { Editor } from '@monaco-editor/react';
import "../css/code.css";
import icodecontext from '../context/Icodecontext';
import Language from './Language';
const CodeEditor = () => {
    const [flag,setflag]=useState("python");
    const handleButton=async(e)=>{
        setflag("javascript");  
    }
    const contextcontent=useContext(icodecontext);
    const handleChangeValue=async(e)=>{
        contextcontent.setcode(e);
    }
    {console.log(contextcontent.lang.length)}
    return (
        <div>
            <button onClick={handleButton}>click me</button>
            <Language/>
            <div className='editorCover'>
                <Editor height="95vh" 
                theme='vs-dark'
                defaultLanguage={flag}
                onMount={handlMount}
                defaultValue="// some comment" 
                value={contextcontent.code}
                onChange={handleChangeValue}
                />
            </div>
        </div>
    )   
}

export default CodeEditor
