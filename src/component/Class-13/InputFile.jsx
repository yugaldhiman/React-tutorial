import axios from 'axios';
import React, { useState } from 'react'

const InputFile = () => {
    const [datas, setDatas] = useState({ name: "", collage: "" })

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
    const InsartFun = () => {
        axios.post("http://localhost:3000/student", datas)
    }


    return (
        <div className='inputFileBox'>
            <p>
                <input type="text" value={datas.name} onChange={InputFun1} />
            </p>
            <p>
                <input type="text" value={datas.collage} onChange={InputFun2} />
            </p>
            <button onClick={InsartFun}>Insart</button>
        </div>
    )
}

export default InputFile
