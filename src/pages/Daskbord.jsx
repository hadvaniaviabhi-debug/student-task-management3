// …existing code…//
import React, { useEffect, useState } from 'react'
import Navbar from '../componentes/Navbar'
import { useNavigate } from 'react-router-dom'
import TaskList from '../componentes/TaskList'

const Daskbord = () => {

const navigate = useNavigate()
const [tasks, setTasks] = useState([])

useEffect(()=>{
fetchData();
},[]);

const fetchData = async() =>{
try {
const response = await fetch("http://localhost:3000/tasks");
const data = await response.json();
setTasks(data);
}catch(error) {
console.log(error)
}
};

const handleLogout = () => {
console.log('click from dashboard')
localStorage.removeItem('loginData')
localStorage.removeItem('authData')
navigate('/login')
}

return (
<div>
<Navbar title="Task Management" onLogout={handleLogout}/>
<h1> Hello </h1>
<TaskList tasks={tasks} />
</div>
)
}

export default Daskbord
// …existing code…