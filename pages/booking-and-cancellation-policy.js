import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { CMS_NAME, imgblurDataURL, BASE_PATH } from "./../lib/constants";
import Image from "next/image";
import Aboutusdata from "./../data/termsandconditions.json";
import { Icon } from "@iconify/react";
import SectionSeparator from "./../components/section-separator";

export default function Privacypolicy() {
  const router = useRouter();
  const slug = router.asPath; 
 return (
    <>
      <Head>
        <title>Terms and Conditions| {CMS_NAME}</title>
       <link rel="canonical" href={`${BASE_PATH}${slug}`}/>
        {/* <meta property="og:image" content={tour.ogImage.url} /> */}
      </Head>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 cancellation-policy"> 
               <h1 className="mb-3">Booking Policy</h1>
               <ol>
                <li>30% of the tour expenses is to be deposited with North by Northeast Journeys at the time of booking. This deposit along with an invoice from North by Northeast Journeys on receipt of such an amount will be considered the confirmation of the booking</li>
                <li>The full payment for the tour needs to be paid 40 days prior to departure</li>
               </ol>
              <SectionSeparator />
                <h1 className="mt-5 mb-5">Cancellation Policy</h1>
                <table class="table table-striped-columns">
                   <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Timeframe</th>
                        <th scope="col">Cancellation Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>30+ days prior departure</td>
                        <td>15% of tour fee</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>29 - 22 days prior departure</td>
                        <td>50% of tour fee</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>21 - 15 days prior depature</td>
                        <td>75% of tour fee</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>14 - 0 days prior depature</td>
                        <td>100% of tour fee</td>
                      </tr>
                    </tbody> 
                </table>
                 <ol>
                  <li>Cancellations must be intimated to North by Northeast Journeys in writing</li>
                  <li>Cancellation in the unforeseen eventualities of disaster, war, riots, political or industrial unrest like Airline operators strike or any other force majeure (forces outside our control), it may be necessary to cancel the tour in the best interests of our clients. In such an eventuality our clients will be informed as soon as possible. 75% of the expenses borne by the clients (depending on the cancellation policies of the hotels, resorts, homestays etc) will be refunded by North by Northeast Journeys.</li>
                  <li>North by Northeast Journeys does not own places of accommodation (hotels, resorts) for its clients. While we do exert influence for the service providers to adhere to the utmost quality, the ultimate responsibility for the service is with the Hotels themselves.</li>
                  <li>North by Northeast Journeys will not refund the booking amount for entry refused due to VISA or health factors, such cancellations will be guided by the cancellation policy.</li>
                </ol>

               </div>
               
          </div>
        </div>
      </section>   
    </>
  );
}

