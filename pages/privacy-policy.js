import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { CMS_NAME, imgblurDataURL, BASE_PATH } from "./../lib/constants";
import Image from "next/image";
import Aboutusdata from "./../data/termsandconditions.json";
import { Icon } from "@iconify/react";


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
            <div className="col-lg-12"> 
               <p className="text-justify">
               We're committed to protecting your privacy. Our Privacy policy is currently being finalized and will be published here shortly.
               </p>
            </div>
          </div>
        </div>
      </section>   
    </>
  );
}

