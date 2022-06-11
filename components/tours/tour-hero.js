import React from "react";

export default function TourHero({title, src, image }) {

  return (
    <>
      <div className="hero-slider-item page">
        <div className="overlay page"></div>
        <img
          src={image}
          alt="Cover Image" 
          layout="fill"
          objectFit="cover"
        />
        <div className="hero-content page">
          <h1 className="text-white text-center font-weight-bold text-uppercase mx-auto">{title}</h1>
          <h3  className="text-white text-center font-weight-bold text-uppercase mx-auto">{subtitle}</h3>
        <h4  className="text-white text-center font-weight-bold text-uppercase mx-auto">{days}</h4>
        </div>
      </div>
    </>
  );
}
