import React from "react";
import Slider from "react-slick";
import Image from "next/image"; 
import Testimonialdata from "../data/testimonials.json";

export default function Testimonials() {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button className="prevArrow" onClick={onClick}> 
        <Image
          className="px-2"
          src="/images/icons/arrow-left.svg"
          width={40}
          height={40}
          alt=""
        />
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button className="nextArrow" onClick={onClick}> 
        <Image
          className="px-2"
          src="/images/icons/arrow-right.svg"
          width={40}
          height={40}
          alt=""
        />
      </button>
    );
  }
  var settings = {
    infinite: true,
    fade: true,
    dots: false,
    arrows: true,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <section className="section pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h5 className="section-title-sm"></h5>
              <h2 className="section-title section-title-border">
                Clientspeak
              </h2>
            </div>
            <div className="col-lg-6 col-md-6 pr-0 align-self-center">
              <Image
                className="img-fluid 100"
                src="/images/Clientspeak.jpg"
                alt="clients-image"
                width={490}
                height={710}
                layout="intrinsic"
              />
            </div>
            <div className="col-lg-6 col-md-6 align-self-center pl-0">
              <div className="testimonial-slider p-3">
                <Slider {...settings}>
                  {Testimonialdata.testimonials.map((item, index) => (
                    <div key={index}>
                      <i className="testimonial-icon ">
                        {/* <ImQuotesLeft size={40} /> */}
                        <Image
                          className="mt-1"
                          src="/images/icons/quote-6.svg"
                          width={40}
                          height={40}
                          alt=""
                        />
                      </i>
                      <p className="text-dark">{item.text}</p>
                      <h4 className="font-weight-normal">{item.name}</h4>
                      <h6 className="font-secondary text-color">{item.tour}</h6>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
