import React from 'react';

import "./Home.css"
import { useNavigate } from 'react-router';

const Home = () => {
    const navigate = useNavigate()

    const adminHandler =()=>{
        navigate("/admin")
    }
    const agentHandler = ()=>{
        navigate("/login")
    }
  return (
        <div className='home'>
            <div className='container-home'>
            
            <button onClick={adminHandler}>
                    Super Admin
                </button>

    
                <button onClick={agentHandler}>
                    Agent
                </button>
            </div>
                
         
        </div>
  )
}

export default Home