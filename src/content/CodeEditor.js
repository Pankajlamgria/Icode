import React, { useRef,useContext, useState } from 'react'
import { Editor } from '@monaco-editor/react';
import "../css/code.css";
import icodecontext from '../context/Icodecontext';
import Language from './Language';
const CodeEditor = () => {
    const contextcontent=useContext(icodecontext);


    const editorRef=useRef();
    const onMount=(editor)=>{
        editorRef.current=editor;
        editor.focus();
    }

    const handleChangeValue=async(e)=>{
        contextcontent.setcode(e);
    }

    const file=contextcontent.files[contextcontent.lang];
    return (
        <div>
            <Language/>
            <div className='editorCover'>
                <Editor height="88vh" 
                width="50vw"
                theme='vs-dark'
                path={file.name}
                defaultLanguage={file.language}
                defaultValue={file.value}
                onMount={onMount}
                value={contextcontent.code}
                onChange={handleChangeValue}
                />
            </div>
           
        </div>
    )   
}

export default CodeEditor
