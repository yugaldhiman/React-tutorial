import React, { useEffect, useState } from 'react'
import './FecthApi.css'
import axios from 'axios'

const FecthApi = () => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then(result => {
                setDatas(result.data);
            })
            .catch(Error => {
                console.log("Error");
            })
    }, [])
    const list = datas.map(itme => <div className='mainBox' key={itme.id}>
        <div className="articlBox">
            
            <img src={itme.url} alt="error" />
            <img src={itme.thumbnailUrl} alt="error" />
            <h2><span>{itme.id}</span> {itme.title}</h2>
        </div>
    </div>)
    return (
        <div className='listBox'>
            {list}
        </div>
    )
}

export default FecthApi
