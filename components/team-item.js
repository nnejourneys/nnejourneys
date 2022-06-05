import React from "react";
import Image from "next/image";
import Teammembers from "../data/team.json";

export default function TeamItem({index, title, bio, image}) {
  return (
    <> 
      <div>
        {/* {Teammembers.teammembers.map((item, index) => ( */}
          <div key={index}>
            <aside class="col-lg-4">
              <div class="bg-gray rounded mb-50">
                {/* <Image
                  class="img-fluid w-100 rounded-top"
                  src={image}
                  width="100"
                  height="100"
                  layout="responsive"
                  alt="team member"
                /> */}
                <div class="py-2 px-4 pb-3">
                  <div class="py-3 border-bottom-not-last">
                    <p class="d-inline-block font-primary m-0">
                      <i class="mr-2 ti-flag-alt"></i>Experience Of
                    </p>
                    <span class="font-weight-bold text-dark float-right">
                      16&#43; Years
                    </span>
                  </div>

                  <div class="py-3 border-bottom-not-last">
                    <p class="d-inline-block font-primary m-0">
                      <i class="mr-2 ti-location-pin"></i>From
                    </p>
                    <span class="font-weight-bold text-dark float-right">
                      Tezpur, Assam
                    </span>
                  </div>
                </div>
              </div>
            </aside>
            <div class="col-lg-8">
              <h2>{title}</h2>
              <p class="mb-40">{bio}</p>
            </div>
          </div>
        {/* ))} */}
      </div>
    </>
  );
}
