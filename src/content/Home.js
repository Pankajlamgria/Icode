import React, { useEffect } from 'react'
import "../css/Home.css"
import headerImg from "../media/homeicon.png"
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate=useNavigate();

    useEffect(()=>{
        const bgAnimation = document.getElementById('bgAnimation');
    
        const numberOfColorBoxes = 400;
    
        for (let i = 0; i < numberOfColorBoxes; i++) {
            const colorBox = document.createElement('div');
            colorBox.classList.add('colorBox');
            bgAnimation.append(colorBox)
        }
    },[])
    const handleToCode=()=>{
        navigate('/code');       
    }
    const handleToHome=()=>{
        navigate('/');
    }
    return (
        <div>
            <div className="bgAnimation" id="bgAnimation">
                <div className="backgroundAmim">

                </div>
            </div>
            <div className='HomeContainer'>
                <div className='Header'><img id='headerImg' onClick={handleToHome} src={headerImg} /></div>
                <div className='InteractionHome'>
                    <h2>Unleash Your Creativity with Our Online Code Editor: Write, Compile, and Collaborate Anytime, Anywhere!</h2>
                    <button id="homeBtn" onClick={handleToCode}>Start session</button>
                </div>
            </div>
        </div>
    )


}

export default Home
