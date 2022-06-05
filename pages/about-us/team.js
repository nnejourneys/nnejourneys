import React, { useState } from "react";
import Image from "next/image";
import Teammembers from "../../data/team.json";

export default function Team() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="my-5">
                <h2 className="my-5">Your Companions</h2>

                <p className="px-3">
                  Personnel wise we are collaborative group of some really nice
                  and strong people with their own sets of expertise. These
                  tours are made of various elements chipped in by people from
                  across the region. From logistics, local know-how, activity
                  expertise, camping and cooking to just good company , we have
                  some one who is one of the best in the line. Our intention is
                  to actively encourage and help our team and others by
                  collaborating and working for each other. One thing for sure,
                  with these good folk around you can rest assured that you will
                  be taken care of, kept well fed, given a good local
                  prospective and kept safe while always respecting and being
                  considerate towards the local folk and the environment.
                </p>
              </div>
            </div>

            <div className="row">
              {Teammembers.teammembers
                .sort((a, b) => (a.weight > b.weight ? 1 : -1))
                .map((item, index) => (
                  <div
                    className="col-lg-3
                   col-sm-6 mb-4"
                    key={index}
                  >
                    <div className="card text-center">
                      <Image
                        className="card-img-top"
                        src={item.image}
                        width={340}
                        height={290}
                        layout="responsive"
                        alt="team-member"
                      />
                      <div className="card-body card-body-2 pb-0 px-4">
                        <a className="card-title text-color h5 d-block">
                          {item.title}
                        </a>

                        <div className="py-2 px-0 pb-3">
                          <span className="fw-bold float-right">
                            {item.information.map((item, index) => (
                              <div className="py-3 my-2 " key={index}>
                                <p className="d-inline-block  float-start m-0">
                                  <Image
                                    className="px-1 pt-2"
                                    src={item.icon}
                                    width={20}
                                    height={20}
                                    alt=""
                                  />
                                  {item.label}
                                </p>
                                <span className="fw-bold float-end">
                                  {item.data}
                                </span>
                              </div>
                            ))}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
