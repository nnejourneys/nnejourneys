import React from "react"; 
import Image from "next/image";
import { Icon } from '@iconify/react';
import Slider from "react-slick";
import Slides from "../data/heroslider.json";

export default function HeroSliderMain() {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button className="prevArrow" onClick={onClick}>
        <Icon icon="bi:arrow-left" width="30" height="30"/>
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button className="nextArrow" onClick={onClick}>
        <Icon icon="bi:arrow-right" width="30" height="30"/>
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
      <div className="hero-slider position-relative">
        <Slider {...settings}>
          {Slides.hero.slides.map((item, index) => (
            <div className="hero-slider-item py-160" key={index}>
              <div className="overlay"></div>
              <Image
                src={item.image}
                alt="Cover Image"
                layout="fill"
                objectFit="cover"
              />
              <div className="hero-content">
                <h3
                  className="hero-title text-white fw-bold mb-1"
                  // data-duration-in=".5"
                  // data-animation-in="fadeInLeft"
                  // data-delay-in=".1"
                >
                  {item.title}
                </h3>
                <h1
                  className="hero-subtitle text-white fw-bold mb-3"
                  // data-duration-in=".5"
                  // data-animation-in="fadeInLeft"
                  // data-delay-in=".4"
                >
                  {item.subtitle}
                </h1>
                <p
                  className="hero-text p text-white mb-90"
                  // data-duration-in=".5"
                  // data-animation-in="fadeInLeft"
                  // data-delay-in=".7"
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
