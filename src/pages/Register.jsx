import React from "react";
import './Register.css'
import { Link } from "react-router-dom";
const Register = () => {
return (
<>
<div className="form-container">
<h1>Register</h1>
<form>
{/*NAme field*/}
<div className="form-group">
<label htmlFor="name">Full Name</label>
<input
type="text"
id="name"
name="name"
placeholder="Enter your full name"
/>
</div>

        {/*Email field*/}
        <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                />
        </div>
        {/*phone Number Field*/}
        <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                />
        </div>
        {/*password field*/}
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                />
        </div>
        {/*Submit Button*/}
        
            <button type="submit" className="btn-primary">
                Register
            </button>
  </form>
  
  <p className="link-text">
    Already have an account? <Link to ="/login">Login here</Link>
  </p>
  </div>
</>
);
};

export default Register;