import Header from './componentes/Header'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
 
const route = createBrowserRouter([
{
path: "/Login",
element: <Login />
},
{
path: "/Register",
element: <Register />
}
])

return<RouterProvider router={route}/>
}

export default App