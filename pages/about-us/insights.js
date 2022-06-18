import React from "react";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import Insightsdata from "../../data/insights.json";
import Image from "next/image"; 

export default function Insights() {
  return (
    <>
      <Head>
        <title>Insights | {CMS_NAME}</title>
        {/* <meta property="og:image" content={tour.ogImage.url} /> */}
      </Head>
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="post-content">
                <h2 id="northeast-india-unravelled">
                  Northeast India Unravelled
                </h2>

                <p>
                  Sometimes the Seven Sisters of the Northeast (the states of
                  Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram,
                  Nagaland and Tripura) hardly seem like India at all. The
                  region&rsquo;s hundreds of tribes and subtribes are slowly
                  embracing modernity, but remain extremely diverse.
                  Nagaland&rsquo;s former headhunters now go to church on
                  Sundays. Many Arunachalis also attend church-like buildings on
                  Sundays – to worship the sun and moon. Cloudy Himalayan
                  valleys near the border of Tibet are dotted with colourful
                  monasteries, echoing with Buddhist chants and clashing
                  cymbals.
                </p>

                <p>
                  The geography is as varied as the culture. While waterfalls
                  thunder down Cherrapunjee&rsquo;s jungle escarpments,
                  blizzards may be blocking the passes to Tawang, and one-horned
                  rhinos go on grazing peacefully in Kaziranga&rsquo;s
                  grasslands beside the mighty Brahmaputra.
                </p>

                <p>
                  Northeast travel can be tough, with atrocious roads and long
                  distances. But the destinations are always worth the effort
                  and there&rsquo;ll be a warm welcome that awaits. You are
                  indeed far from the beaten track: only the adventurous need
                  apply. - According to <strong>Lonely Planet</strong>
                </p>
              </div>
            </div>

            {Insightsdata.insights.map((item, index) => (
              <div className="col-lg-4 col-sm-6 mb-4" key={index}>
                <div className="card text-center">
                  <h5 className="card-title py-3">{item.title}</h5>
                  <div className="card-img-wrapper">
                    <Image
                      className="card-img-top rounded-0"
                      src={item.image}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8v4CpHgAGaQIiff9TZQAAAABJRU5ErkJggg=="
                      alt="service-image"
                      layout="responsive"
                      width="240"
                      height="160"
                    />
                  </div>
                  <div className="card-body p-0 insights-body">
                    <p className="card-text insights-text mx-2 mb-0 py-3">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
