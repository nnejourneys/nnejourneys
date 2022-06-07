import React from "react";
// import bg from "../public/images/CTA.jpg";
// import bg from "../public/images/river-crossing.jpg";

import bg from "../public/images/ferry-crossing.jpg";
import Image from "next/image";

export default function CTA() {
  return (
    <>
      <section
        className="cta h-100 text-center text-lg-left overflow-hidden"
        style={{
          backgroundImage: `url(${bg.src})`,
          width: "100%",
          height: "100%",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6 d-flex justify-content-end">
              <a href="/contact" className="btn btn-light text-uppercase">
                get in touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
