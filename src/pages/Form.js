import React, { useState } from "react";
import "../styles/Form.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const notify = () => toast.success("Coming soon");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      toast.warning("Invalid email address");
      return;
    }

    if (!role) {
      toast.warning("please fill the role");
      return;
    }

    notify()
    setEmail("");
    setPassword("");
    setRole("");
  };

  const isValidEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };
  return (
    <>
      <div className="container">
      <ToastContainer 
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="form-title">Login</h2>
          <div className="form-group">
            <input
              type="email"
              id="email"
              value={email}
              className={email ? "filled" : ""}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-group">
            <div className="password-input">
              <input
                type="password"
                id="password"
                value={password}
                className={password ? "filled" : ""}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="form-group">
            <select
              className={role ? "filled" : ""}
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value=""> </option>
              <option value="Admin">Admin</option>
              <option value="Distributor">Distributor</option>
              <option value="SubDistributor">SubDistributor</option>
              <option value="Dealer">Dealer</option>
              <option value="SubDealer">SubDealer</option>
              <option value="Customer">Customer</option>
              <option value="Employee">Employee</option>
            </select>
            <label htmlFor="role">Select user type</label>
          </div>
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
