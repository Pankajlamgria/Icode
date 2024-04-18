import React, { useState } from "react";
import icodecontext from "./Icodecontext";

const IcodeState = (props) => {
  const [code, setcode] = useState("var x = 10; var y = 25; var z = x + y; console.log(\"x + y = \" + z);");
  const [result, setresult] = useState("");
  const [lang, setlang] = useState("javascript");
  const [version, setversion] = useState("18.15.0");
  const [apiLanguage,setApiLanguage]=useState("nodejs");
  const [input,setinput]=useState("");
  const files = {
    javascript: {
      name: "script.js",
      language: "javascript",
      value: "var x = 10; var y = 25; var z = x + y; console.log(\"x + y = \" + z);",
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
      value: "print(\"Hello, World!\");",
      version: "",
    },
    java: {
      name: "app.java",
      language: "java",
      value: "public class MyClass { \n public static void main(String args[]) { \n int x=10; int y=25; int z=x+y; System.out.println(\"Sum of x+y = \" + z); } }",
      version: "",
    },
    c: {
      name: "main.c",
      language: "c",
      value: "#include<stdio.h>\n int main() { \n printf(\"Hello, World!\"); \n }",
      version: "",
    },
    csharp: {
      name: "main.cs",
      language: "csharp",
      value: "using System; \n class Program { \n static void Main() { \n int x = 10; int y = 25; int z = x + y; Console.Write(\"Sum of x + y = \"+ z); } }",
      version: "",
    },
    php: {
      name: "main.php",
      language: "php",
      value: "<?php \n $x = 25; $y = 10; $z = $x + $y; printf('Sum of x + y = %s', $z);",
      version: "",
    },
    cpp: {
      name: "main.cpp",
      language: "cpp",
      value:
        '#include<iostream>\nusing namespace std;\nint main(){\n    cout<<"Code here";\n}',
      version: "",
    },
  };

  // javascript fetch mode from rapid API
  const handleRunCode = async () => {
    const url = "https://online-code-compiler.p.rapidapi.com/v1/";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "26bbe97cbcmsh9a85f9c0fb7ef6ap16a14ajsn6e1cb448f028",
        "X-RapidAPI-Host": "online-code-compiler.p.rapidapi.com",
      },
      body:JSON.stringify({
        language: apiLanguage,
        version: 'latest',
        code: code,
        input: input
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // let Out=result.output;
      // if(Out.search("/application.js:")!==-1){
      //   let start=Out.search("application.js:")+("application.js".length);
      //   let end=Out.search("Error:");
      //   let newstr=Out.substring(end);
      //   end+=newstr.search("\n");
      //   newstr="";
      //   for(let i=start;i<end;i++){
      //       newstr+=Out[i];
      //   }
      //   setresult(newstr);
      //   console.log(newstr);
      // }
      // else{
        // setresult(result.output);
        //   console.log(result.output);
        // }
      setresult(result.output);
    } catch (error) {
      console.error(error);
    }
  };
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
        setresult,
        apiLanguage,
        setApiLanguage,
        setinput,
        input
      }}
    >
      {props.children}
    </icodecontext.Provider>
  );
};

export default IcodeState;
