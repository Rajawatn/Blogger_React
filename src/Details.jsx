import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Details() {
  return (
    <>
      <section className="blog-detail mtb-40">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="blog-left">
                <h1>Sample blog post 1</h1>
                <div className="posted-on">
                  <p>
                    by <span>RSGiTECH</span> on <span>October 22, 2018</span>
                  </p>
                </div>
                <div className="detail-img">
                  <img src="assets/images/img1.jpg" alt="blog1" />
                </div>
                <div className="blog-desc">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.{" "}
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-right">
                <div className="right-widget recent-post">
                  <h3>Recent Blogs</h3>
                  <a href="#">
                    <div className="rb-box">
                      <div className="rb-box-img">
                        <img src="assets/images/img1.jpg" alt="blog1" />
                      </div>
                      <div className="rb-box-desc">
                        <h4>Sample blog post 1</h4>
                        <p>Posted On: October 22, 2018</p>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div className="rb-box">
                      <div className="rb-box-img">
                        <img src="assets/images/img2.jpg" alt="blog1" />
                      </div>
                      <div className="rb-box-desc">
                        <h4>Sample blog post 2</h4>
                        <p>Posted On: October 22, 2018</p>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div className="rb-box">
                      <div className="rb-box-img">
                        <img src="assets/images/img3.jpg" alt="blog1" />
                      </div>
                      <div className="rb-box-desc">
                        <h4>Sample blog post 3</h4>
                        <p>Posted On: October 22, 2018</p>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div className="rb-box">
                      <div className="rb-box-img">
                        <img src="assets/images/img4.jpg" alt="blog1" />
                      </div>
                      <div className="rb-box-desc">
                        <h4>Sample blog post 4</h4>
                        <p>Posted On: October 22, 2018</p>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div className="rb-box">
                      <div className="rb-box-img">
                        <img src="assets/images/img5.jpg" alt="blog1" />
                      </div>
                      <div className="rb-box-desc">
                        <h4>Sample blog post 5</h4>
                        <p>Posted On: October 22, 2018</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="right-widget categories">
                  <h3>Categories</h3>
                  <ul>
                    <li>
                      <a href="#">Technology</a>
                    </li>
                    <li>
                      <a href="#">Design</a>
                    </li>
                    <li>
                      <a href="#">Culture</a>
                    </li>
                    <li>
                      <a href="#">Business</a>
                    </li>
                    <li>
                      <a href="#">Politics</a>
                    </li>
                    <li>
                      <a href="#">Opinion</a>
                    </li>
                    <li>
                      <a href="#">Science</a>
                    </li>
                    <li>
                      <a href="#">Health</a>
                    </li>
                    <li>
                      <a href="#">Style</a>
                    </li>
                    <li>
                      <a href="#">Travel</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Details;
