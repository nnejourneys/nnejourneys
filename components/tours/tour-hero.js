import React from "react";
import Image from "next/image";
import { useRouter } from 'next/router'

export default function TourHero({title, src, image }) {
  // const router = useRouter()
  // const pagetitle = router.pathname.split('/').join(' ').split('-').join(' ')

  return (
    <>
      <div className="hero-slider-item page">
        <div className="overlay page"></div>
        <img
          src={image}
          alt="Cover Image" 
          layout="fill"
          // width={100}
          // height={100}
          objectFit="cover"
        />
        <div className="hero-content page">
           
          <h1
            className="text-white text-center font-weight-bold text-uppercase mx-auto"
            // data-duration-in=".5"
            // data-animation-in="fadeInLeft"
            // data-delay-in=".4"
          >
            {title} 
            
          </h1>
          <h3  className="text-white text-center font-weight-bold text-uppercase mx-auto"> {subtitle} </h3>
        <h4  className="text-white text-center font-weight-bold text-uppercase mx-auto"> {days} </h4>
        </div>
      </div>
    </>
  );
}
