import Head from "next/head";
import { CMS_NAME, imgblurDataURL, BASE_PATH,  HOME_OG_IMAGE_URL } from "../lib/constants";
import About from "../components/about";
import CTA from "../components/cta";
import Testimonials from "../components/testimonials";
import TourTypes from "../components/tour-types"; 
import Region from "../components/region";

export default function Index( ) {
   
  return (
    <>
      <Head>
        <title> {CMS_NAME} | Holidays in Northeast India</title>
        <link rel="canonical" href={BASE_PATH}/>
        <meta name="robots" content="index"/>
      </Head> 
      <TourTypes />
      <About /> 
      <Region/>
      <CTA />
      <Testimonials /> 
    </>
  );
} 