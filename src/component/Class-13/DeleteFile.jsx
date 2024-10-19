import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteFile = () => {
    const [datas, setDatas] = useState({ name: "", collage: "", course: "" });

    useEffect(() => {

        axios.get(`http://localhost:3000/student/${id}`)
            .then(res => {
                setDatas(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    const navigate = useNavigate()
    const { id } = useParams();
    const Deletefun = () => {
        axios.delete(`http://localhost:3000/student/${id}`)
        navigate('/outputFile')
    }
    return (
        <>
            <div className='inputFileBox'>
                <form onSubmit={Deletefun} >
                    <h1>{datas.name}</h1>
                    <h1>{datas.collage}</h1>
                    <h1>{datas.course}</h1>
                    <button type="submit">Delete</button>
                </form>
            </div>
        </>
    )
}

export default DeleteFile

