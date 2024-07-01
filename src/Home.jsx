import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Home() {
  return (
    <>
      <section className="banner">
        <div className="banner-box">
          <div className="intro-text">
            <div className="intro-text-box">
              <h1>Lorem Ipsum is simply dummy text</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
          <img src="assets/images/banner.jpg" alt="banner" />
        </div>
      </section>
      <section className="featured-blog mtb-40 " >
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="blog-box">
                <img src="assets/images/img1.jpg" alt="blog1" />
                <h3>Sample blog post 1</h3>
                <p>
                  by <span>RSGiTECH</span> on <span>October 22, 2018</span>
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
                <a href="detail.html" className="btn btn-danger">
                  Read more...
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-box">
                <img src="assets/images/img2.jpg" alt="blog1" />
                <h3>Sample blog post 2</h3>
                <p>
                  by <span>RSGiTECH</span> on <span>October 22, 2018</span>
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
                <a href="detail.html" className="btn btn-danger">
                  Read more...
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-box">
                <img src="assets/images/img3.jpg" alt="blog1" />
                <h3>Sample blog post 3</h3>
                <p>
                  by <span>RSGiTECH</span> on <span>October 22, 2018</span>
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
                <a href="detail.html" className="btn btn-danger">
                  Read more...
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-box">
                <img src="assets/images/img4.jpg" alt="blog1" />
                <h3>Sample blog post 4</h3>
                <p>
                  by <span>RSGiTECH</span> on <span>October 22, 2018</span>
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
                <a href="detail.html" className="btn btn-danger">
                  Read more...
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-box">
                <img src="assets/images/img5.jpg" alt="blog1" />
                <h3>Sample blog post 5</h3>
                <p>
                  by <span>RSGiTECH</span> on <span>October 22, 2018</span>
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
                <a href="detail.html" className="btn btn-danger">
                  Read more...
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-box">
                <img src="assets/images/img6.jpg" alt="blog1" />
                <h3>Sample blog post 6</h3>
                <p>
                  by <span>RSGiTECH</span> on <span>October 22, 2018</span>
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
                <a href="detail.html" className="btn btn-danger">
                  Read more...
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
