import React from "react";
import Image from 'next/image'

export default function TourTypes() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <h4 className="section-title-sm"></h4>
              <h2 className="section-title section-title-border">
                Active, Interactive and Authentic Tours of Northeast India
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-6 mb-4">
                <div className="card text-center">
                  <h5 className="card-title py-3">ACTIVE ADVENTURE</h5>
                  <div className="card-img-wrapper">
                    <Image
                      className="card-img-top rounded-0"
                      src="/images/service/adventure.jpg"
                      alt="service-image"
                      width={240}
                      height={160}
                      layout="responsive"
                    />
                  </div>
                  <div className="card-body p-0">
                    <p className="card-text mx-2 mb-0 py-3">
                      Our Active Adventure tours in northeast India are for the
                      avid as well as novice, be it relaxed or a real test of
                      determination and endurance.
                    </p>
                    
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 mb-4">
                <div className="card text-center">
                  <h5 className="card-title py-3">NATURE &amp; CULTURE</h5>
                  <div className="card-img-wrapper">
                    <Image
                      className="card-img-top rounded-0"
                      src="/images/service/wildlifenculture.jpg"
                      alt="service-image"
                      width={240}
                      height={160}
                      layout="responsive"
                    />
                  </div>
                  <div className="card-body p-0">
                    <p className="card-text mx-2 mb-0 py-3">
                      These 8 states lying in the Indo-Burmese and the Himalayan
                      Bio-diversity hotspots are also home to over 150 unique
                      and distinct ethinic groups.
                    </p>
                    
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 mb-4">
                <div className="card text-center">
                  <h5 className="card-title py-3">LAIDBACK LEISURE</h5>
                  <div className="card-img-wrapper">
                    <Image
                      className="card-img-top rounded-0"
                      src="/images/service/leisure.jpg"
                      alt="service-image"
                      width={240}
                      height={160}
                      layout="responsive"
                    />
                  </div>
                  <div className="card-body p-0">
                    <p className="card-text mx-2 mb-0 py-3">
                      Holidays that take you away from the maddening crowds,
                      kick off your shoes, destress and enjoy the serenity while
                      we take care of the rest.
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
