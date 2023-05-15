import React from "react";
import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <div className="container">
      <div className="row d-flex align-items-center justify-content-center">
        <form className="col-4">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Login
          </button>
          <span>
              Don't have account? <Link to="/RegisterForm">Register</Link>
            </span>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
