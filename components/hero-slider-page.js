import React from "react";
import Image from "next/image";
import { useRouter } from 'next/router'

export default function HeroSliderPage() {
  const router = useRouter()
  const pagetitle = router.pathname.split('/').join(' ').split('-').join(' ')

  return (
    <>
      <div className="hero-slider-item page py-160">
        <div className="overlay page"></div>
        <Image
          src="/images/hero-slider/leisure-holidays-in-northeast-india.jpg"
          alt="Cover Image"
          layout="fill"
          objectFit="cover"
        />
        <div className="hero-content page">
           
          <h1
            className="text-white text-center font-weight-bold text-uppercase mx-auto"
            // data-duration-in=".5"
            // data-animation-in="fadeInLeft"
            // data-delay-in=".4"
          >
            {pagetitle}
          </h1>
          
        </div>
      </div>
    </>
  );
}
