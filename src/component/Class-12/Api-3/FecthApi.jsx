import React, { useEffect, useState } from 'react'
import './FecthApi.css';
import axios from 'axios';

const FecthApi = () => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/albums")
            .then(res => {
                setDatas(res.data);
            })
            .catch(Error => {
                console.log("Error 404");
            })
    }, [])
    const list = datas.map(itme => <div className='mainBox' key={itme.id}>
        <div className="leftBox">
            <h4>{itme.id}</h4>
        </div>
        <div className="rightBox">
            <h2>{itme.userId}</h2>
            <h3>{itme.title}</h3>
        </div>
    </div>)

    return (
        <>
            {list}
        </>
    )
}

export default FecthApi
