import React from "react";
import Link from 'next/link'
import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="about section-sm overlay my-5">
        <Image
          className="section-bg"
          src="/images/travels-in-the-other-india.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="container about-text ">
          <div className="row " >
            <div className="col-lg-7 offset-lg-4">
              <div className="rounded p-sm-3 px-2 py-4 bg-dark">
                <h3 className="section-title section-title-border-half text-white">
                  Welcome to India&rsquo;s far East
                </h3>
                <p className="text-white mb-40">
                  Over the years, we have actively worked towards facilitating
                  experiential travel which is Active, Interactive and Authentic
                  in its truest form. Our tours of Northeast India include
                  Cycling, Treks &amp; Walks, Motorcycle &amp; Overland,
                  Multi-Activity, Family Adventures, Wildlife, Culture and Youth
                  travel , all of which have local history, culture,
                  interactions and the environment as their centerpiece.
                </p> 
                <Link href="/about-us" >
                <a className="btn btn-primary mt-2">
                  Know More
                </a>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
