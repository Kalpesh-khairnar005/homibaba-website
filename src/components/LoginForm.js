import React from "react";
import "./LoginForm.css";
import './Navbar.css';


const LoginForm = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login successful! Welcome to Homieebaba.");
    e.target.reset();
  };

  return (
    <section id="login" className="login-section">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input type="text" placeholder="Mobile Number" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default LoginForm;
