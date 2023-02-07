import React from 'react'
import "./Header.css"
const Header = () => {
  
  const agent = localStorage.getItem(("currentagent"))
  // useEffect(()=>{// have to fix
  //   //let path = (window.location.href)//
  //   if(window.location.href==="/"){
  //     setHide(false)
  //   }else{
  //     setHide(true)
  //   }

  // },[path])

  const logoutHandler = ()=>{
    localStorage.removeItem("currentagent")
    localStorage.removeItem("passengerData")
    window.location.href=("/")
  }
  return (
    <div className='header'>
        <h5>Welcome {agent}</h5>
        <h5>Railways.com</h5>
       <button onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default Header