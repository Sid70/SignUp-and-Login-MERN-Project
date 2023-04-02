import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import axios from 'axios';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onButtonSubmit = () => {

        const url = "http://localhost:8000/signin";

        axios.post(url,{
            email,password
        })
        .then((res)=>{alert(res.data)})
    }

    return (
        <>
            <Navbar />
            <div className='container mt-5'>
                <form onSubmit={ onButtonSubmit }>
                    <div className="mb-3">
                        <label htmlFor="lemail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="lemail1" aria-describedby="emailHelp" name='email' value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lpassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="lpassword" name='password' value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Log In</button>
                </form>
            </div>
        </>

    )
}
