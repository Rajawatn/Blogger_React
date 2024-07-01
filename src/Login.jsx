import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Login() {
  return (
    <>
      <section className="login-wrap mtb-40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="login-box">
                <h1>Administrator Login</h1>
                <form action="">
                  <div className="form-group">
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <a href="dashboard.html" className="btn btn-primary">
                      Log In
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
