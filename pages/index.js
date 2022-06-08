import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants"; 
import About from "../components/about";
import MissionAccordion from "../components/mission-accordion";
import CTA from "../components/cta";
import Testimonials from "../components/testimonials";
import TourTypes from "../components/tour-types";

export default function Index({ allPosts }) {
   
  return (
    <>
      <Head>
        <title> {CMS_NAME} </title>
      </Head> 
      <TourTypes />
      <About />
      <MissionAccordion />
      <CTA />
      <Testimonials />
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
