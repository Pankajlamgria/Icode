import React,{useState} from 'react'
import icodecontext from './Icodecontext'

const IcodeState = (props) => {
  const [code,setcode]=useState('');
  const [lang,setlang]=useState('python');
  const [version,setversion]=useState("18.15.0");
  return (
    <icodecontext.Provider
    value={{
        code,setcode,lang,setlang,version,setversion
    }}
    >{props.children}</icodecontext.Provider>
  )
}

export default IcodeState
