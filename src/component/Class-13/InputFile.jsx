import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const InputFile = () => {
    const [datas, setDatas] = useState({ name: "", collage: "", course: "" })

    const InputFun1 = (Event) => {
        setDatas(
            {
                ...datas,
                name: Event.target.value
            }
        );
    }
    const InputFun2 = (Event) => {
        setDatas(
            {
                ...datas,
                collage: Event.target.value
            }
        );
    }
    const InputFun3 = (Event) => {
        setDatas(
            {
                ...datas,
                course: Event.target.value
            }
        );
    }
    const InsartFun = () => {
        axios.post("http://localhost:3000/student", datas)
    }
    return (
        <div className='inputFileBox'>
            <p>
                <input type="text" placeholder='Enter Your Name' value={datas.name} onChange={InputFun1} />
            </p>
            <p>

                <input type="text" placeholder='Enter Your Collage' value={datas.collage} onChange={InputFun2} />
            </p>
            <p>

                <input type="text" placeholder='Enter Your Course' value={datas.course} onChange={InputFun3} />
            </p>
            <button onClick={InsartFun}>Insart</button>
        </div>
    )
}
export default InputFile

