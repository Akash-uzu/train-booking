import React from 'react'
import "./Header.css"

const Header = () => {
  
  const agent = localStorage.getItem("currentagent")
  const logoutHandler = ()=>{
    window.location.href ="/"
    localStorage.removeItem("currentagent")
  }
  let currentLocation = window.location.pathname;
  console.log(currentLocation)
  return (
    <div className='header'>
        <h5>Welcome {agent}</h5>
        <h5>Spritle</h5>
        {currentLocation==="/" }
        <button onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default Header