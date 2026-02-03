import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
const [formData, setFormData] = useState({
email: "",
password: "",
});
const [errors, setErrors] = useState({});
const navigate = useNavigate();

const validate = () => {
const newErrors = {};

if (!formData.email.trim()) {
  newErrors.email = "Email is required.";
} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
  newErrors.email = "Invalid Email format";
}
if (!formData.password.trim()) {
  newErrors.password = "Phone Number is required.";
} else if (formData.password.length < 6) {
  newErrors.password = " Minimum 6 character required.";
}

setErrors(newErrors);
return Object.keys(newErrors).length === 0;
};

const handleInputChange = (e) => {
//console.log(e.target.name,e.target.value)

//e.target.name = e.target.value
setFormData({
  ...formData,
  [e.target.name]: e.target.value,
});

setErrors({
  ...errors,
  [e.target.name]: "",
});
};
const handleClick = (e) => {
e.preventDefault();
if (validate()) {
const user = JSON.parse(localStorage.getItem("authData"));
if (
user &&
formData.email === user.email &&
formData.password === user.password
) {
localStorage.setItem("loginData", JSON.stringify(formData));
navigate("/daskbord");
} else {
alert("Invalid Email or Password");
}
} else {
alert("something went wrong !");
}
};
// const handleClick= (e) => {
// e.preventDefault();
// if (validate()) {
// localStorage.setItem("authData", J SON.stringify(formData));
// alert("Successfull Login…!");
// navigate("/daskbord");
// }
// };

return (
<div className="form-container">
<h1 className="form-title">Wellcome Back</h1>
<form onSubmit={handleClick}>
<div className="form-group">
<label htmlFor="email">Email Address</label>
<input
type="email"
id="email"
name="email"
value={formData.email}
placeholder="Enter your email"
onChange={handleInputChange}
/>
{errors.email && <span className="error-msg">{errors.email}</span>}
</div>

    <div className="form-group">
      <label htmlFor="password">password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        placeholder="Enter your password"
        onChange={handleInputChange}
      />
      {errors.password && (
        <span className="error-msg">{errors.password}</span>
      )}
    </div>

    <button type="submit" className="btn-primary">
      {" "}
      Login{" "}
    </button>
  </form>

  <p className="link-text">
    Don't have an account? <Link to="/Register">Register here</Link>
  </p>
</div>
);
};

export default Login;