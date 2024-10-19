import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditFile = () => {
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

    const SubmitHandler = () => {
        axios.put(`http://localhost:3000/student/${id}`, datas)
        navigate('/outputFile')
    }
    return (
        <>
            <div className='inputFileBox'>
                <form onSubmit={SubmitHandler} >
                    <p> <input type="text" value={datas.name} onChange={(Event => setDatas({ ...datas, name: Event.target.value }))} /></p>
                    <p> <input type="text" value={datas.collage} onChange={Event => setDatas({ ...datas, collage: Event.target.value })} /></p>
                    <p><input type="text" value={datas.course} onChange={Event => setDatas({ ...datas, course: Event.target.value })} /></p>
                    <button type="submit">Update</button>
                </form>
            </div>
        </>
    )
}

export default EditFile
