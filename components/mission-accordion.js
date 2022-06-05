import React from "react";
import Accordian from "./accordian";

export default function MissionAccordion() {
  return (
    <>
      {/* <!-- mission --> */}
      <section className="mission section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h5 className="section-title-sm"></h5>
              <h2 className="section-title section-title-border-half">
                The region at a glance
              </h2>
            </div>
            <div className="col-lg-6">
              <Accordian />
            </div>

            <div className="col-lg-6 align-self-end">
              <img
                src="/images/about/Map%20of%20northeast%20India.jpg"
                alt="chart"
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
