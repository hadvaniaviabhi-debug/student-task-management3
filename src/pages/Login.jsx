import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
const Login = () => {
return (
<div className="form-container">
<h1 className="form-title">Welcome Back</h1>
<form>
{/*Email field*/}
<div className="form-group">
<label htmlFor="email">Email Address</label>
<input
type="email"
id="email"
name="email"
placeholder="Enter your Email"/>
</div>
{/*password field*/}
<div className="form-group">
<label htmlFor="password">Password</label>
<input
type="password"
id="password"
name="password"
placeholder="Enter your Password"/>
</div>
{/*submit button*/}
<button type="submit" className="btn-primary">
Login
</button>
</form>

  {/*link to register page*/}

  <p className="link-text">
    Don't have an account? <Link to="/register">Register here</Link>
  </p>
</div>
)
}

export default Login