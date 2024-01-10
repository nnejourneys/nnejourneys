import { useRouter } from "next/router";
import {
  CMS_NAME,
  imgblurDataURL,
  BASE_PATH,
  HOME_OG_IMAGE_URL,
} from "../../lib/constants";
import { getTourBySlug, getAllTours } from "../../lib/api";
import { Container, Tabs, Tab } from "react-bootstrap";
import ErrorPage from "next/error";
import markdownToHtml from "../../lib/markdownToHtml";
import Head from "next/head";
import TourHeader from "../../components/tours/tour-itin-header";
import TourTitle from "../../components/tours/tour-itin-title";
import TourOverview from "../../components/tours/tour-itin-overview";
import TourBody from "../../components/tours/tour-itin-body";
import TouroversList from "../../components/tours/tour-itin-overs";
import TourdataList from "../../components/tours/tour-itin-data-list";
import TouraccoList from "../../components/tours/tour-itin-acco-list";
import TourGallery from "../../components/tours/tour-itin-gallery";
import TourVideo from "../../components/tours/tour-itin-video";
import EnquiryForm from "../../components/enquiry-form";
import TourFaq from "../../components/tours/tour-itin-faq";
import TourOthertours from "../../components/tours/tour-itin-othertours";
import SectionSeparator from "../../components/section-separator";


export default function Tour({ tour }) {
  const router = useRouter();
  const slug = router.asPath;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    headline: tour.title,
    description: tour.description,
    image: tour.bg_image,
  };

  if (!router.isFallback && !tour?.slug) {
    return (
      <>
        {tourSlug}
        <ErrorPage statusCode={404} />
      </>
    );
  }
  return (
    <>
      {router.isFallback ? (
        <TourTitle>Loading…</TourTitle>
      ) : (
        <>
          <article className="mb-5">
            <Head>
              <title>
                {tour.title} | {CMS_NAME}
              </title>
              <meta property="og:title" content={tour.title} />
              <meta property="og:image" content={tour.bg_image} />
              <meta property="og:type" content="tour itinerary" />
              <meta property="og:image:alt" content="TourImage" />
              <meta property="og:description" content={tour.description} />
              <meta name="description" content={tour.description} />
              <meta name="keywords" content={tour.keywords} />
              <link rel="canonical" href={`${BASE_PATH}${slug}`} />
              <script
                key="structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
              />
            </Head>

            {tour.title || tour.subtitle || tour.days || tour.bg_image ? (
              <TourHeader
                title={tour.title}
                subtitle={tour.subtitle}
                days={tour.days}
                image={tour.bg_image}
              />
            ) : null}
         

            <Container className="container-fluid">
              <div className="row">
                <div className="col-lg-7 mt-3">
                  {tour.content ? ( <div className=" mt-5  mb-50 ">
                    <h4>Highlights</h4>
                    <TourdataList datalist={tour.highlights} />
                  </div>
                 
                    ) : null}
                  
                </div>
                <div className="col-lg-4 offset-lg-1" id="sticky-sidebar">
                 
                 <div className=" p-3 mt-5 rounded shadow-sm mb-50 tour-overview ">
                    <h4 className="mb-20">Tour Overview</h4>
                    {tour.overview ? (
                      <TourOverview overview={tour.overview} />
                    ) : null}
                    
                  </div>

                </div>
                
              </div>
            </Container>

            <Container className="" >

              <div className="row">  
                <div className="col-lg-7">
                  <div>
                  {tour.description ? (
                      <h3 className="mb-5 tour-description">{tour.description}</h3>
                      ) : null}

                    {tour.content ? (<TourBody className="mb-5" content={tour.content} />
                    ) : null}
                  </div> 
                </div>
              </div>

              
              <Tabs
                defaultActiveKey="overview"
                id="uncontrolled-tab-example"
                className="my-5"
              >
                {tour.overs ? (
                  <Tab eventKey="overview" title="Overview">
                    <h5 className="mb-5">Overview</h5>
                    <TouroversList overs={tour.overs} />
                  </Tab>
                ) : null}
             
                {tour.inclusions ? (
                  <Tab eventKey="inclusions" title="Inclusions">
                    <h5 className="mb-5">Inclusions</h5>
                    <TourdataList datalist={tour.inclusions} />
                  </Tab>
                ) : null}
                {tour.exclusions ? (
                  <Tab eventKey="exclusions" title="Exclusions">
                    <h5 className="mb-5">Exclusions</h5>
                    <TourdataList datalist={tour.exclusions} />
                  </Tab>
                ) : null}
                {tour.meals || tour.accommodation || tour.refreshments ? (
                  <Tab eventKey="accommodation" title="Accomodation">
                    <h5 className="mb-5">Accomodation</h5>
                    <TouraccoList
                      meals={tour.meals}
                      accommodation={tour.accommodation}
                      refreshments={tour.refreshments}
                    />
                  </Tab>
                ) : null}
                <Tab eventKey="gallery" title="Gallery">
                  <h5 className="mb-5">Gallery</h5>
                  <TourGallery
                    galleryimages={tour.galleryimages}
                    subtitle={tour.subtitle}
                  />
                </Tab>
                {tour.video ? (
                  <Tab eventKey="video" title="Video">
                    <h5 className="mb-5">Video</h5>
                    <TourVideo video={tour.video} />
                  </Tab>
                ) : null}
                {tour.title ? (
                  <Tab eventKey="enquire" title="Enquire">
                    <h5 className="mb-5">Enquire</h5>
                    <EnquiryForm title={tour.title} />
                  </Tab>
                ) : null}
              </Tabs>
              <SectionSeparator />
              {tour.faq ? (
                <div className="mt-5">
                  <h5>FAQ</h5>
                  <TourFaq faq={tour.faq} />
                  <SectionSeparator />
                </div>
              ) : null}
              <div className="my-5">
                <h6 className="text-danger fw-light text-center">
                  * Our Itineraries are quite unique hence we prefer not to put
                  it up on the site. Please write in to us for the detailed
                  itinerary and cost.
                </h6>
              </div>
              <SectionSeparator />
              <h4 className="text-capitalize"> other {tour.type}</h4>
              {tour.othertours ? (
                <TourOthertours othertours={tour.othertours} />
              ) : null}
              <SectionSeparator />
            </Container>
          </article>
        </>
      )}
    </>
  );
}

export async function getStaticProps({ params }) {
  const tour = getTourBySlug(params.slug, [
    "keywords",
    "title",
    "slug",
    "subtitle",
    "days",
    "description",
    "tourdesc",
    "bg_image",
    "image",
    "video",
    "type",
    "category",
    "cat",
    "tags",
    "weight",
    "touricon",
    "type",
    "overview",
    "overs",
    "highlights",
    "inclusions",
    "exclusions",
    "accommodation",
    "meals",
    "refreshments",
    "faq",
    "content",
    "galleryimages",
    "othertours",
    "listdata",
    "datalist",
  ]);
  const content = await markdownToHtml(tour.content || "");

  return {
    props: {
      tour: {
        ...tour,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const tours = getAllTours(["slug"]);

  return {
    paths: tours.map((tour) => {
      return {
        params: {
          slug: tour.slug,
        },
      };
    }),
    fallback: false,
  };
}
