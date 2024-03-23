import React, { useContext } from 'react';
import icodecontext from '../context/Icodecontext';
import Dropdown from 'react-bootstrap/Dropdown';

const Language = () => {
    const contextcontent = useContext(icodecontext)
    const arr = [["javascript", "18.15.0"], ["typescript", "5.0.3"], ["python", "3.10.0"], ["java", "15.0.2"], ["csharp", "6.12.0"], ["php", "0.2.3"]]
    return (
        <div>
            <h2 style={{ marginBottom: "1rem" }}>Language: </h2>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {contextcontent.lang}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => {
                        contextcontent.setlang(arr[0][0]);
                        contextcontent.setversion(arr[0][1]);
                    }}>{arr[0][0]}</Dropdown.Item>
                    <Dropdown.Item onClick={() => {
                        contextcontent.setlang(arr[1][0]);
                        contextcontent.setversion(arr[1][1]);
                    }}>{arr[1][0]}</Dropdown.Item>
                    <Dropdown.Item onClick={() => {
                        contextcontent.setlang(arr[2][0]);
                        contextcontent.setversion(arr[2][1]);
                    }}>{arr[2][0]}</Dropdown.Item>
                    <Dropdown.Item onClick={() => {
                        contextcontent.setlang(arr[3][0]);
                        contextcontent.setversion(arr[3][1]);
                    }}>{arr[3][0]}</Dropdown.Item>
                    <Dropdown.Item onClick={() => {
                        contextcontent.setlang(arr[4][0]);
                        contextcontent.setversion(arr[4][1]);
                    }}>{arr[4][0]}</Dropdown.Item>
                    <Dropdown.Item onClick={() => {
                        contextcontent.setlang(arr[5][0]);
                        contextcontent.setversion(arr[5][1]);
                    }}>{arr[5][0]}</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>

    )
}

export default Language
