import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Dashboard() {
  return (
    <>
      <section className="dashboard-wrap mtb-40">
        <div className="container">
          <div className="body-content">
            <div className="row">
              <div className="col-md-3">
                <div className="dash-left">
                  <ul>
                    <li className="active">
                      <a href="dashboard.html" className="active">
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="admin-blog-list.html">Blogs</a>
                    </li>
                    <li>
                      <a href="#">Categories</a>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                    </li>
                    <li>
                      <a href="#">Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-9">
                <div className="dash-right">
                  <h1>Dashboard</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
