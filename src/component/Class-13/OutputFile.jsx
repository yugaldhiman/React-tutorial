import axios from 'axios';
import './All.css'
import React, {useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const OutputFile = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/student")
            .then(result => {
                setDatas(result.data);
            })
            .catch(Error => {
                console.log("Error");
            })
    }, [])
    const list = datas.map((itme) => <div key={itme.id} className='main-Box'>
        <h3>Name:- {itme.name}</h3>
        <h3>Collage:- {itme.collage}</h3>
        <h3>Course:- {itme.course}</h3>
        <NavLink className={"btn"} to={"/editFile/"+itme.id}>Edit</NavLink>
        <NavLink className={"btn"} to={"/deleteFile/"+itme.id}>Delete</NavLink>
    </div>)
    return (
        <>
            <div className='box'>
                {list}
            </div>
        </>
    )
}

export default OutputFile
