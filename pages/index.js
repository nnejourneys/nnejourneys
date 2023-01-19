import Head from "next/head";
import { getAllTours } from "../lib/api";
import { CMS_NAME, imgblurDataURL, BASE_PATH,  HOME_OG_IMAGE_URL } from "../lib/constants";
import About from "../components/about";
import CTA from "../components/cta";
import Testimonials from "../components/testimonials";
import TourTypes from "../components/tour-types"; 
import Region from "../components/region";
import ToursSlider from "../components/tours-slider";

export default function Index({ allTours }) {

  const departures = allTours.filter(
    (tour) => tour.category == "departures"
  );
   
  return (
    <>
      <Head>
        <title> {CMS_NAME} | Holidays in Northeast India</title>
        <link rel="canonical" href={BASE_PATH}/>
        <meta name="robots" content="index"/>
      </Head> 
      <TourTypes />
      <ToursSlider tours={departures}/>
      <About /> 
      <Region/>
      <CTA />
      <Testimonials /> 
      
    </>
  );
}


export async function getStaticProps() {
  const allTours = getAllTours([
    'title',
    'draft', 
    'slug',
    'subtitle',
    'bg_image', 
    'cat',
    'category',
    'type', 
  ]);

  return {
    props: { allTours },
  };
}