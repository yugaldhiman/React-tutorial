import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './FecthApi.css'

const FecthApi = () => {
    const [datas, setData] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(result => {
                setData(result.data);
            })
            .catch(Error => {
                console.log("Error");
            })
    }, []);
    const list = datas.map(itme => <div className='mainBox' key={itme.id}>
        <div className="leftBox">
            <h4>{itme.id}</h4>
        </div>
        <div className="rightBox">
            <p>{itme.title}</p>
            <h3>{itme.body}</h3>
        </div>
    </div>
    );
    return (
        <>
            {list}
        </>
    );
}

export default FecthApi
