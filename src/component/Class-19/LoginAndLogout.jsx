import React, { useState } from 'react'
import axios from 'axios';
import { BiCaretRight } from "react-icons/bi";
import './LoginAndLogout.css'

const LoginAndLogout = (props) => {
    const [users, setUsers] = useState({ password: "", email: "", message: "" });
    const handleLogin = async (Event) => {
        Event.preventDefault();
        try {
            const response = await axios.get(`http://localhost:3000/student`, {
                params: {
                    userEmail: users.email,
                    userPassword: users.password,
                },
            });
            const user = response.data.find(
                (user) => user.userEmail === users.email && user.userPassword === users.password);

            if (user) {
                setUsers({ ...users, message: 'Login Page' });
            }
            else {
                setUsers({ ...users, message: 'Not Login page' })
            }
        }
        catch (error) {
            setUsers({ ...users, message: 'Error in login ' });
        }
    }
    const Logout = () => {
        setUsers({ password: "", email: "", message: "Logout Page" })
    }
    return (
        <>
            <div>
                <h2>{props.data}</h2>
                <form onSubmit={handleLogin}>
                    <div>
                        <label>UserEmail {<BiCaretRight />} </label>
                        <input type="text"
                            value={users.email}
                            onChange={(Event) => setUsers({ ...users, email: Event.target.value })} />
                    </div>
                    <div>
                        <label>UserPassword {<BiCaretRight />}</label>
                        <input type="password"
                            value={users.password}
                            onChange={(Event) => setUsers({ ...users, password: Event.target.value })} />
                    </div>
                    <button type='Submit'>Login</button>
                </form>
                <button onClick={Logout} >Logout</button>
                {
                    users.message && <h1>{users.message}</h1>
                }
            </div>
        </>
    )
}

export default LoginAndLogout