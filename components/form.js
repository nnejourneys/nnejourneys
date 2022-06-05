import React from "react";

export default function Form() {
  return (
    <>
      <div className="col-lg-6 col-md-7">
        <div className="p-5 rounded box-shadow">
          <form action="https://formspree.io/f/mvovqgwd" method="POST">
            <div className="col-lg-12">
              <h3 className="mb-4">Get in touch</h3>
            </div>
            <div className="row">
            <div className="col-lg-6">
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Name"
                required
              />
            </div>
            <div className="col-lg-6">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Email Address"
                required
              />
            </div>
            </div>
            
            <div className="col-lg-12">
              <input
                type="text"
                name="subject"
                id="subject"
                className="form-control"
                placeholder="Subject"
                required
              />
            </div>
            <div className="col-lg-12">
              <textarea
                className="form-control p-2"
                name="message"
                id="message"
                rows={5}
                placeholder="Your Message Here..."
                required
                style={{height: "8rem"}}
              ></textarea>
            </div>
            <div className="col-lg-12">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
