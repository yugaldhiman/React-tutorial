import axios from 'axios';
import './FetchWithDb.css'
import React, { useEffect, useState } from 'react'

const FetchWithDb = () => {
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
    </div>)

    return (
        <>
            <div className='box'>
                {list}
            </div>
        </>
    )
}

export default FetchWithDb
