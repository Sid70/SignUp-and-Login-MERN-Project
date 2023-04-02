import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import axios from 'axios';

export default function Registration() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const onButtonSubmit = () => {

    const url = "http://localhost:8000/signup";
    axios.post(url, {
      name,email,phoneNumber,password
    })
      .then((res) => { alert(res.data) })
  }

  return (
    < >

      <Navbar />

      <div className='container mt-5'>
        <form onSubmit={onButtonSubmit}>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="name" name='name' value={name}
              onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="phNumber" className="form-label">Phone Number</label>
            <input type="number" className="form-control" id="phNumber" name='phNumber' value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

    </>

  )
}
