// import React from 'react';
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const button=async()=>{
    const result= await axios.get( 'https://enable-nine.vercel.app/');
    console.log(result);


  }
  


  return (
    <div style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}} className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
        <h1>Login Success Page</h1>
<button onClick={button}><h1>BUTTOL</h1></button>
        <Link to='/login' className="btn btn-light my-5">Login</Link>
    </div>
  )
}

export default Home