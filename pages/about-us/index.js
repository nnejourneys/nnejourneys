import React from "react";
import Image from 'next/image'
import Responsibility from "../../data/resposibility.json";
import { Icon } from '@iconify/react';


export default function Aboutus() {
  const heroImage = "/images/hero-slider/north-by-northeast-journeys-culture-tours-in-northeast-india.jpg"
  return (
    <>
       <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 order-2 order-lg-1">
              <h5 className="section-title-sm"></h5>
              <h2 className="section-title section-title-border-half">
                Exploring Northeast India since 2010
              </h2>
              <p>
                After having worked in the field of outdoors pan India for over
                7 years, we moved back to the east and started North by
                Northeast Journeys in 2010. It took us some time to get a clear
                vision of our intentions here and how to go about it. The
                argument was between authenticity vs catering to popular demands
                that usual tours offer. Our intention is to provide active,
                interactive and authentic tours to the truest form. We have no
                intention of changing the local way of life in any degree to
                cater tourist demands, rather we work to facilitate authentic
                observation, interactions and experiences. The sensitive nature
                of this region’s people and environment requires that our
                actions are not detrimental in the long run, for change happens
                slowely yet surely. Over the past decade we have worked hard to
                ensure our itineraries are unique and beyond the superficial. We
                have no intention of aping any trends, rather be driven by local
                specialities, practicalities and most importantly by our
                conscience.
              </p>
            </div>
            <div className="col-lg-5 align-self-center order-1 order-lg-2 mb-md-50">
              <Image
                className="img-fluid w-100"
                src="/images/about/philosophy.jpg"
                alt="philosophy-image"
                width={300}
                height={300}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </section> 
      <section>
        <div className="container">
          <div className="row rounded bg-dark"> 
            <div
              className="col-lg-5 rounded-left ceo-image ps-0" 
            >
              <Image
                src="/images/about/ceo.jpg"
                alt=""
                width={300}
                height={300}
                layout="responsive"
              />
            </div>
            <div className="col-lg-7"> 
              <div className="p-5">
                <h2 className="section-title section-title-border-half-white text-white">
                  Our Vision for our Region
                </h2>
                <p className="text-white">
                  To give authentic local prospective to our guests. Facilitate
                  safe, enjoyable and responsible travel. All local personnel
                  and logistic support. Small locally owned and managed
                  establishments be it Homestays, Lodges, Community guest houses
                  etc. Facilitate authentic interactions and experiences. Train
                  and empower local youth to be able to take up tourism related
                  activities to showcase this abundant region in a safe and
                  sustainable manner.
                </p>
                <h5 className="text-white"></h5>
                <h6 className="text-white"></h6>
              </div>
            </div>
          </div>
        </div>
      </section> 
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h5 className="section-title-sm">Our Responsibility Quotient</h5>
              <h2 className="section-title section-title-border-half">Why Us ?</h2>
            </div> 
            <div className="row">
            {Responsibility.responsibility.map((item, index) => (
            <div className="col-md-6 col-lg-3 card border-0" key={index} >
              <Icon className="mx-auto" icon={item.icon} width="80" height="80" />
                <div className="card-body">
                  <h5 className="card-title text-center">{item.title}</h5>  
                </div>
              </div>
                ))}
            </div> 

            <div className="col-lg-12">
              <p className="text-dark mb-40">
                Right from the onset our intent has been to make a difference,
                to be meaningful and most of all sustainable in the long run. We
                had a lot of experience in the operational side of running
                tours, however our mind was far outweighed by questions of how
                to go about things beyond the operations. The main questions
                were to do with how we could be more impactful locally, how our
                activities did not change the overall local way of life and how
                could our tours be more authentic and bring out the local
                prospective. Over the years we have evolved, mostly through
                trial and error. We started with forming a all local team of
                willing individuals who were not tainted by the usual
                understanding of &lsquo;Tourism&rsquo; and yet very handy in
                their surroundings. We have tried our best to generate income
                for locals in a way that though fairly substantial is not their
                primary source of imcome, a way that encourages them to continue
                their usual way of life. We dont encourage locals to dress up,
                dance etc for tourist, for these things are best observed in its
                true authenticity during festivals. We never bargain with the
                bottom of the chain, the people who make all this a reality, we
                firmly belive in dignity and equality of labour. Finally, we
                follow all the age old ways of &lsquo;Leave no trace&rsquo;
                travel.
              </p>
             
            </div>




       



          </div>
        </div>
      </section>
    </>
  );
}
