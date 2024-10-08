import React, { useEffect, useState } from 'react'
import './FecthApi.css'
import axios from 'axios'

const FecthApi = () => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then(res => {
                setDatas(res.data);
            })
            .catch(Error => {
                console.log("Error");
            })
    }, [])

    const list = datas.map(itme => <div className='mainBox' key={itme.id}>
        <div className="leftBox">
            <h4>{itme.id}</h4>
        </div>
        <div className="rightBox">
            <h5>{itme.name}</h5>
            <h4>{itme.email}</h4>
            <h3>{itme.body}</h3>
        </div>
    </div>)

    return (
        <>
            {list}
        </>
    )
}

export default FecthApi
