import React from 'react'
import AddAgent from './AddAgent'
import AgentsList from "./AgentsList"
import { useState } from 'react'
import "./AdminMain.css"
const AdminMain = () => {

    const [addAgent,setAddAgent]=useState(false) 
    const [trigger,setTrigger] = useState(true)
    const isVisible = ()=>{
      setAddAgent(!addAgent)
    }
    console.log(trigger)
    
    
  return (
    <div className='agent-container'>
        <button onClick={isVisible}>Add Agent</button>
        {addAgent && <AddAgent isVisible = {isVisible} setTrigger = {setTrigger} trigger = {trigger} />}
        <AgentsList trigger = {trigger}/>
    </div>
  )
}

export default AdminMain