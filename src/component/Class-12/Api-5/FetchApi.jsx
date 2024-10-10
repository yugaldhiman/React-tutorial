import React, { useEffect, useState } from 'react'
import './FetchApi.css'
import axios from 'axios'

const FetchApi = () => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(res => {
                setDatas(res.data);
            })
            .catch(Error => {
                console.log("Error");
            })
    }, [])

    const list = datas.map((itme) => <div className='h1-Box' key={itme.id}>
        <h1>{itme.title}</h1>
    </div>)


    return (
        <>
            {list}
        </>
    )
}

export default FetchApi
