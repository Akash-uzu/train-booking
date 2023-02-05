import React, { useEffect } from 'react'
import { v4 } from "uuid";
import "./AgentsList.css"
import { useState } from 'react';

const AgentsList = ({trigger}) => {

  const [list, setList] = useState([])

  let filteredData = JSON.parse(localStorage.getItem('data'))
    //  useEffect(()=>{
    //   debugger
    //   setList(JSON.parse(localStorage.getItem('data')))
      
    //  }
    //  ,[filteredData])

    useEffect(()=>{
      console.log('test')
      setList(filteredData)
    },[trigger])
     
    const onChangetick=(e)=>{
      localStorage.setItem("tickets", JSON.stringify(e.target.value))
      console.log(e.target.value)
    }

    const onChangecomp=(e)=>{
      localStorage.setItem("compartments", JSON.stringify(e.target.value))
    }

    const onClickHandler=(e)=>{
      console.log(e.target.id)
      let filteredData = list.filter((user)=>user.Username !== e.target.id)
      setList(filteredData)
      localStorage.setItem("data", JSON.stringify(filteredData))
    }
   
  return (<>
    <h1>Agents List</h1>
    <div className='select-container'>
    <h3>Select the no of Tickets an Agent can choose</h3>
    <select name="tickets" id="tickets" onChange={onChangetick}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
    </select>
    <h3>Select the no of Compartments</h3>
    <select name="compartments" id="compartments" onChange={onChangecomp}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      
    </select>

    </div>
    
    <div>
        
            {list && list.map((user)=><div className='main' key={v4()}>
              <div className='card'><h3 key={v4()}>Email: {user.Email} </h3>
            <h3>Password: {user.Password}</h3> </div> <div><button  onClick={onClickHandler} id={user.Username} > X </button></div></div>)}

        
    </div>
    </>
     
  )
}

export default AgentsList