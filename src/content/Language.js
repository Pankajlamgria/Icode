import React, { useContext } from "react";
import icodecontext from "../context/Icodecontext";
import Dropdown from "react-bootstrap/Dropdown";
import headerImg from "../media/homeicon.png"
import { useNavigate } from "react-router-dom";
import "../css/language.css";
import context from "react-bootstrap/esm/AccordionContext";
const Language = () => {  
  const contextcontent = useContext(icodecontext);
  const navigate=useNavigate();
  const handleToHome=()=>{
    navigate('/');
    }
  const handlerun=async()=>{
    try{
      const res=await contextcontent.handleRunCode();
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <div style={{display:'flex',width:"100%",alignItems:"center"}}>
      <div className='Header' style={{height:"3rem",marginTop:"0px",marginRight:'0px',width:"4.5rem"}}><img id='headerImg' style={{height:'2.6rem',width:"2.6rem"}} onClick={handleToHome} src={headerImg} /></div>
      <div style={{fontFamily:"Arial", marginBottom: "0rem" ,display:'flex',width:"87%",justifyContent:"space-between"}}>

        <h4 style={{display:'flex',width:'50%'}}>Language: 
        <Dropdown style={{marginLeft:"1rem"}}>
          <Dropdown.Toggle variant="success" id="dropdown-basic" style={{background:"#1cc5fd",boxShadow:"2px 2px 20px #485f66",border:"1px solid white"}}>
            {contextcontent.lang}
          </Dropdown.Toggle>

          <Dropdown.Menu>
              <Dropdown.Item onClick={()=>{
                  contextcontent.setlang('javascript');
                  contextcontent.setApiLanguage("nodejs");
                  contextcontent.setcode(contextcontent.files.javascript.value);
              }}>javascript</Dropdown.Item>
              <Dropdown.Item onClick={()=>{
                  contextcontent.setlang('css');
              }}>css</Dropdown.Item>
              <Dropdown.Item onClick={()=>{
                  contextcontent.setlang('html');
              }}>html</Dropdown.Item>
              <Dropdown.Item onClick={()=>{
                  contextcontent.setlang('java');
                  contextcontent.setApiLanguage("java");
                  contextcontent.setcode(contextcontent.files.java.value);
              }}>java</Dropdown.Item>
              <Dropdown.Item onClick={()=>{
                  contextcontent.setlang('cpp');
                  contextcontent.setApiLanguage("cpp17");
                  contextcontent.setcode(contextcontent.files.cpp.value);
              }}>cpp</Dropdown.Item>
              <Dropdown.Item onClick={()=>{
                  contextcontent.setlang('php');
                  contextcontent.setApiLanguage('php');
                  contextcontent.setcode(contextcontent.files.php.value);
              }}>php</Dropdown.Item>
              <Dropdown.Item onClick={()=>{
                  contextcontent.setlang('c');
                  contextcontent.setApiLanguage('c');
                  contextcontent.setcode(contextcontent.files.c.value);
              }}>c</Dropdown.Item>
              <Dropdown.Item onClick={()=>{
                  contextcontent.setlang('csharp');
                  contextcontent.setApiLanguage('csharp')
                  contextcontent.setcode(contextcontent.files.csharp.value);
              }}>c#</Dropdown.Item>
              <Dropdown.Item onClick={()=>{
                  contextcontent.setlang('python');
                  contextcontent.setApiLanguage("python3");
                  contextcontent.setcode(contextcontent.files.python.value);
              }}>python</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </h4>
        <button id="runbtn" onClick={handlerun}>Run</button>
      </div>
    </div>
  );
};

export default Language;
