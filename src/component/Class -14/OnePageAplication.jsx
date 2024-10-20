import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { NavLink, Outlet, Routes, Route } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import './OnePageAplication.css'

const OnePageAplication = () => {
    return (
        <>
            <header>
                <NavLink className={"NavLink"} to='/home'>Home</NavLink>
                <NavLink className={"NavLink"} to="/inputFile">InputFile</NavLink>
                <NavLink className={"NavLink"} to="/outputFile">OutputFile</NavLink>
            </header>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route path="home" element={<Home />} />
                    <Route path="inputFile" element={<InputFile />} />
                    <Route path="outputFile" element={<OutputFile />} />
                    <Route path="/editFile/:id" element={<EditFile />} />
                    <Route path="/deleteFile/:id" element={<DeleteFile />} />
                </Route>
            </Routes>
        </>
    )
}


//   Header function 
const Header = () => {
    return <Outlet />
}


// Home Function
const Home = () => {
    return (
        <>
            <div className="homeBox" >
                <div className="homeBoxChilde">
                    <h1>Welcome To Home</h1>
                </div>
            </div>
        </>
    )
}



// Input Function
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
        <>
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
                <button className='insart' onClick={InsartFun}>Insart</button>
            </div>
        </>
    )
}


// Output Function
const OutputFile = () => {
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
        <br />
        <NavLink className={"btn1"} to={"/editFile/" + itme.id}>Edit</NavLink>
        <NavLink className={"btn2"} to={"/deleteFile/" + itme.id}>Delete</NavLink>
    </div>)
    return (
        <>
            <div className='box'>
                {list}
            </div>
        </>
    )
}

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
                    <button className='update' type="submit">Update</button>
                </form>
            </div>
        </>
    )
}

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
                    <h1> <span>Name:-</span> {datas.name}</h1>
                    <h1> <span>Collage:-</span> {datas.collage}</h1>
                    <h1> <span>Course:-</span> {datas.course}</h1>
                    <button className='delete' type="submit">Delete</button>
                </form>
            </div>
        </>
    )
}

export default OnePageAplication