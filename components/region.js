import React, { useEffect } from "react";
import Regiondata from "../data/regionaccordian.json";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Image from "next/image";
import { imgblurDataURL } from "../lib/constants";

export default function Region() {
  const { ref, inView } = useInView({threshold: 0.1});
  const animation = useAnimation(); 

  useEffect(()=>{ 
    if(inView){
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          type: 'spring',
          duration: 2, 
          bounce: 0.1
        }
      }) 
    }
      if(!inView){
        animation.start({opacity: 0.3, x: '-25vw'}) 
      }
  }, [inView]);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <h2 className="section-title section-title-border">
              The region at a glance
            </h2>
          </div>
        </div>
        <ul ref={ref} className="region-card-list ps-0">
          {Regiondata.accordion.map((item, index) => (
            <motion.li className="row region-card text-color p-0 my-5" key={index} animate={animation}>
              <div className="col-md-7 region-text"  >
                <h5 className="text-color mb-2 py-0 px-0 section-title-border-half mb-5 ">
                  {item.title}
                </h5>
                <p className="text-justify">
                  {item.text}
                </p>
              </div>
              <div className="col-md-5 region-img">
                <Image
                  src={item.image}
                  placeholder="blur"
                  blurDataURL={imgblurDataURL}
                  alt={item.title}
                  layout="responsive"
                  width="480"
                  height="480"
                  sizes="40vw"
                  className="img-fluid"
                />
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
}
