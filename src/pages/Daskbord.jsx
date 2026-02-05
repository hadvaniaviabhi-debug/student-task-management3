import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../componentes/Navbar";
import TaskForm from "../componentes/TaskForm";
import TaskList from "../componentes/TaskList";

const Daskbord = () => {
const navigate = useNavigate();
const [tasks, setTasks] = useState([]);

const fetchData = async () => {
try {
const response = await fetch("http://localhost:3000/tasks");
const data = await response.json();
setTasks(data);
} catch (error) {
console.log(error);
}
};

useEffect(() => {
fetchData();
}, []);

const handleLogout = () => {
localStorage.removeItem("loginData");
localStorage.removeItem("authData");
// localStorage.clear()
navigate("/login");
};

const handleAddTask = async (newTask) => {
const tasktoAdd = { ...newTask, completed: false };
try {
const response = await fetch("http://localhost:3000/tasks", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(tasktoAdd),
});
console.log(tasktoAdd);
const data = await response.json();
setTasks([tasks, data]);
} catch (error) {
console.log(error);
}
};

return (
<div>
<Navbar title="Task Management" onLogout={handleLogout} />
<TaskForm addTask={handleAddTask} />
<h1>MY TASKS</h1>
<TaskList tasks={tasks} />
</div>
);
};

export default Daskbord;