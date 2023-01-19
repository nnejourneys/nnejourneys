import React, { useState, useEffect } from "react";
import Image from "next/image";
import { imgblurDataURL } from "../lib/constants";
import { Icon } from "@iconify/react";
import Slider from "react-slick"; 
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TourSliderCard from "../components/tours/tour-itin-slider-card";

export default function ToursSlider({ tours }) {
  const [currentSlide, setcurrentSlide] = useState();
  const animation = useAnimation();

  useEffect(() => {
    if (currentSlide) {
      animation.start({
        x: "0",
        transition: {
          type: "tween",
          duration: 1.5,
        },
      });
    }
    if (!currentSlide) {
      animation.start({ x: "-2vw" });
    }
  }, [currentSlide]);

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <motion.button
        className="nextArrow"
        initial={{ y: -30 }}
        whileTap={{ scale: 0.75, opacity: 0.5 }}
        onClick={onClick}
        aria-label="next"
      >
        <Icon icon="bi:arrow-right" width="30" height="30" />
      </motion.button>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <motion.button
        className="prevArrow"
        initial={{ y: -30 }}
        whileTap={{ scale: 0.75, opacity: 0.5 }}
        onClick={onClick}
        aria-label="previous"
      >
        <Icon icon="bi:arrow-left" width="30" height="30" />
      </motion.button>
    );
  }
  var settings = {
    infinite: true,
    slidesToShow: 4,
    swipeToSlide: true,
    arrows: true,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3, 
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="pb-5">
      <h4 className="text-center my-5"> Some of our upcoming Departures</h4>
      <Slider {...settings} ref={setcurrentSlide} className="mx-lg-5 px-lg-5 mx-md-2 px-md-2 ">
        {tours.map((tour, index) => (
          <TourSliderCard
            key={index}
            bg_image={tour.bg_image}
            title={tour.title}
            subtitle={tour.subtitle}
            slug={tour.slug}
            cat={tour.cat}
          />
        ))}
      </Slider>
    </section>
  );
}
