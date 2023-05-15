import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [count, setCount] = useState(0);
  const [Login, setLogin] = useState("");
  const [Password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (!Login || !Password) return;
    console.log(Login, Password);
    axios.post("https://646288b17a9eead6fad1a201.mockapi.io/users", {
      login: Login,
      password: Password,
    });
    setLogin("");
    setPassword("");
  };

  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //   axios
  //     .get("https://646288b17a9eead6fad1a201.mockapi.io/users")
  //     .then((response) => {
  //       setUsers(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   },5000);
  //   return () => clearInterval(intervalId); //This is important
  // }, []);

  return (
    <div className="container">
      <div className="row d-flex align-items-center justify-content-center">
        <form className="col-4" onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setLogin(e.target.value)}
              value={Login}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label">Check me out</label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!Password || !Login}
          >
            Register
          </button>

          <span>
            Have account? <Link to="/LoginForm">Login</Link>
          </span>
        </form>
      </div>
      {/* {users.map((user, index) => (
        <li>{user.login}</li>
      ))} */}
    </div>
  );
};

export default RegisterForm;
