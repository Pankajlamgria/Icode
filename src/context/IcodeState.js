import React, { useState } from "react";
import icodecontext from "./Icodecontext";
import axios from "axios";
// import "Access-Control-Allow-Origin"  

const IcodeState = (props) => {
  const [code, setcode] = useState("");
  const [result,setresult]=useState("");
  const [lang, setlang] = useState("javascript");
  const [version, setversion] = useState("18.15.0");
  const files = {
    javascript: {
      name: "script.js",
      language: "javascript",
      value: "someJSCodeExample",
      version: "15.10.0",
    },
    css: {
      name: "style.css",
      language: "css",
      value: "someCSSCodeExample",
      version: "",
    },
    html: {
      name: "index.html",
      language: "html",
      value: "someHTMLCodeExample",
      version: "",
    },
    python: {
      name: "main.py",
      language: "python",
      value: "something in python",
      version: "",
    },
    java: {
      name: "app.java",
      language: "java",
      value: "something in java",
      version: "",
    },
    typescript: {
      name: "main.ts",
      language: "typescript",
      value: "something in typescript",
      version: "",
    },
    csharp: {
      name: "main.cs",
      language: "csharp",
      value: "something in csharp",
      version: "",
    },
    php: {
      name: "main.php",
      language: "php",
      value: "something in php",
      version: "",
    },
    cpp: {
      name: "main.cpp",
      language: "cpp",
      value: "something in cpp",
      version: "",
    },
  };

  const API = axios.create({
    baseURL: "https://emkc.org/v2/pistor",
  });
  // const handleRunCode = async () => {
  //   const response = await API.post("/execute", {
  //     widthCredentials:true,
  //     language: files[lang].language,
  //     version: files[lang].version,
  //     files: [
  //       {
  //         content: code,
  //       },
  //     ],
  //   });
  //   return response.data;
  // };
  const handleRunCode=async()=>{
      const options = {
        method: 'POST',
        url: 'https://online-code-compiler.p.rapidapi.com/v1/',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
          'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
        },
        data: {
          language: 'python3',
          version: 'latest',
          code: 'print("Hello, World!");',
          input: null
        }
      };
      
      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
  }
  return (
    <icodecontext.Provider
      value={{
        code,
        setcode,
        lang,
        setlang,
        version,
        setversion,
        files,
        handleRunCode,
        result,
        setresult
      }}
    >
      {props.children}
    </icodecontext.Provider>
  );
};

export default IcodeState;
