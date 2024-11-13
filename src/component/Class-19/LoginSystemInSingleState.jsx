import React, { useState } from 'react'
import axios from 'axios';
import { BiCaretRight } from "react-icons/bi";
import Button from 'react-bootstrap/Button';

const LoginSystemInSingleState = (props) => {
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
    return (
        <>
            <div>
                <h2>Login {props.data}</h2>
                <form onSubmit={handleLogin}>
                    <div>
                        <label>UserEmail {<BiCaretRight/>} </label>
                        <input type="text"
                            value={users.email}
                            onChange={(Event) => setUsers({ ...users, email: Event.target.value })} />
                    </div>
                    <div>
                        <label>UserPassword {<BiCaretRight/>}</label>
                        <input type="text"
                            value={users.password}
                            onChange={(Event) => setUsers({ ...users, password: Event.target.value })} />
                    </div>
                    {/* <button type='Submit'>Login</button> */}
                    <Button variant="warning">Warning</Button>
                </form>
                {
                    users.message && <h1>{users.message}</h1>
                }
            </div>



            
        </>
    )
}

export default LoginSystemInSingleState
