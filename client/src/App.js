import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './screen/Login'
import Registration from './screen/Registration';
import Home from './screen/Home';


export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
