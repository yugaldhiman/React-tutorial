import React, { useState } from 'react';
import './Card.css';
import img from './logo.png';

const Card = () => {

    const [companyName, setCompanyname] = useState("");
    const [yourName, setYourname] = useState("");
    const [number, setNumber] = useState("");

    return (
        <>
            <div class="container">
                <div id="main_div">
                    <div id="main_div_child">
                        <div id="text">
                            <h1 id="companyName">{companyName.onerName}</h1>
                            <h2 id="bossName">{yourName.uName}</h2>
                            <h4 id="contactNumber">{number.myNumber}</h4>
                        </div>
                        <div id="text_bottom">
                            <h4 id="h2">address:</h4>
                            <p>Muzaffarnagar, uttar pradesh, Ph: +91-96-9090 0114</p>
                            <p>Email: rajan&company@gmail.com, www.caoffice.com</p>
                        </div>
                        <div id="main_div_child_1">
                            <img src={img} alt="error" />
                        </div>
                    </div>
                    <div id="main_div_child_bottom"></div>
                    <br />
                    <br />
                    <input className='companyName'
                        type="text"
                        value={companyName.onerName}
                        placeholder='Enter Your Company Name'
                        onChange={Event => setCompanyname({ companyName, onerName: Event.target.value })}
                    />
                    <input className='myName'
                        type="text"
                        value={yourName.uName}
                        placeholder='Enter Your Name'
                        onChange={Event => setYourname({ yourName, uName: Event.target.value })}
                    />
                    <input className='myName'
                        type="tel"
                        value={number.myNumber}
                        placeholder='Enter Your Number'
                        onChange={Event => setNumber({ number, myNumber: Event.target.value })}
                    />
                </div>
            </div>
        </>
    )
}

export default Card;
