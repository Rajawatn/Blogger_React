import React from 'react'
import Header from './Header'

function Contact() {
  return (
    <>
     <section className="cmspage mtb-40">
        <div className="container">
          <div className="page-desc">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <h1>Contact</h1>
                <form>
                  <div className="form-group">
                    <input type="text" name="name" className="form-control" placeholder="Name"/>
                  </div>
                  <div className="form-group">
                    <input type="text" name="email" className="form-control" placeholder="E-Mail"/>
                  </div>
                  <div className="form-group">
                    <input type="text" name="phone" className="form-control" placeholder="Phone"/>
                  </div>
                  <div className="form-group">
                    <textarea name="message" rows="5" className="form-control" placeholder="Message"></textarea>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-success">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default Contact