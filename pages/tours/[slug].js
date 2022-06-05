import { useRouter } from "next/router";
import Image from "next/image";
import ErrorPage from "next/error";
import TourBody from "../../components/tours/tour-body";
import TourHeader from "../../components/tours/tour-header";
import { getTourBySlug, getAllTours } from "../../lib/api";
import TourTitle from "../../components/tours/tour-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import { Container, Tabs, Tab } from "react-bootstrap";
import EnquiryForm from "../../components/enquiry-form";
import { SRLWrapper } from "simple-react-lightbox";
// import TourHero from "../../components/tours/tour-hero";

export default function Tour({ tour }) {
  const options = {
    settings: {
      overlayColor: "rgb(0, 0, 0, 0.8)",
    },
    buttons: {
      showDownloadButton: false,
    },
    caption: {
      captionColor: "#fff",
      captionTextTransform: "capitalize",
      captionFontSize: "1rem",
    },
    thumbnails: {
      showThumbnails: false,
    },
  };

  const router = useRouter();
  if (!router.isFallback && !tour?.slug) {
    return(
    <>
    {tourSlug}
        <ErrorPage statusCode={404} />
    
    </>
    ) ;
  }
  return (
    <>
      {router.isFallback ? (
        <TourTitle>Loading…</TourTitle>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>
                {tour.title} | Next.js Blog Example with {CMS_NAME}
              </title>
              {/* <meta property="og:image" content={tour.ogImage.url} /> */}
            </Head> 
            <TourHeader title={tour.title} subtitle={tour.subtitle} days={tour.days} image={tour.bg_image} />
            <Container>
              <div className="row mt-5">
                <div className="col-md-12 text-center"> 
                  <h6 className="my-5">{tour.description}</h6>
                </div>
              </div>
              <div className="row">
                <aside className="col-lg-4">
                  <div className="p-3 rounded border mb-50">
                    <h4 className="text-color mb-20">Tour Overview</h4>
                    <ul className="pl-0 mb-10">
                      {tour.overview.map((item, index) => (
                        <li className="py-2 border-bottom-not-last" key={index}>
                          <p className="d-inline-block font-primary m-0">
                            <Image
                              className="px-1 pt-2"
                              src={item.icon}
                              width={20}
                              height={20}
                              alt=""
                            />
                            {item.label}
                          </p>
                          <span className="font-weight-normal text-dark float-end">
                            {item.data}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>

                <div className="col-lg-8 ">
                  <p className="tourdesc"> {tour.tourdesc} </p>
                </div>
              </div> 
              <Tabs
                defaultActiveKey="overview"
                id="uncontrolled-tab-example"
                className="mb-5"
              >
                <Tab eventKey="overview" title="Overview">
                  <h5>Overview</h5>
                  <ul className="pl-0 mb-10">
                    {tour.over.map((item, index) => (
                      <li className="py-2 border-bottom-not-last" key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Tab>
                <Tab eventKey="highlights" title="Highlights">
                  <h5>Highlights</h5>
                  <ul className="pl-0 mb-10">
                    {tour.highlights.map((item, index) => (
                      <li className="py-2 border-bottom-not-last" key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Tab>
                <Tab eventKey="inclusions" title="Inclusions">
                  <h5>Inclusions</h5>
                  <ul className="pl-0 mb-10">
                    {tour.inclusions.map((item, index) => (
                      <li className="py-2 border-bottom-not-last" key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Tab>
                <Tab eventKey="accommodation" title="Accomodation">
                  <h5>Accomodation</h5>
                  <ul className="pl-0 mb-10">
                    <li className="d-flex"> 
                      <p className="fw-bolder pe-2"> Meals:</p> 
                      <p> {tour.meals} </p> 
                    </li>
                    <li className="d-flex"> 
                      <p className="fw-bolder pe-2">Accommodation:</p> 
                      <p> {tour.accommodation} </p> 
                    </li>
                    <li className="d-flex"> 
                      <p className="fw-bolder pe-2">Refreshments: </p> 
                      <p> {tour.refreshments} </p>
                    </li>
                  </ul>
                </Tab>
                <Tab eventKey="gallery" title="Gallery">
                  <h5>Gallery</h5>
                  <SRLWrapper options={options}>
                    <ul className="gallery">
                      {tour.galleryimages.map((item, index) => {
                        return (
                          <li className="d-block mb-4" key={index}>
                            <a key={index} href={item}>
                              <Image
                                className="img-fluid "
                                src={item}
                                alt={tour.subtitle}
                                layout="fixed"
                                width="300"
                                height="200"
                              />
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </SRLWrapper>
                </Tab>
                <Tab eventKey="enquire" title="Enquire">
                  <h5>Enquire</h5>
                  <EnquiryForm />
                </Tab>
              </Tabs>
              <hr className="mt-5" />
              <div className="mt-5">
                <h5>FAQ</h5>
                <ul className="pl-0 my-3">
                  {tour.faq.map((item, index) => (
                    <li className="py-3 border-bottom-not-last" key={index}>
                      <h5> {item.title} </h5>
                      <p> {item.text} </p>
                    </li>
                  ))}
                </ul>
              </div> 
              <div className="mt-5">
                <p className="text-danger fst-italic"> 
                  * Our Itineraries are quite unique hence we prefer not to put
                  it up on the site. Please write in to us for the detailed
                  itinerary and cost.
                </p>
              </div> 
              <TourBody className="my-5" content={tour.content} />
            </Container>
          </article>
        </>
      )}
    </>
  );
}

export async function getStaticProps({ params }) {
  const tour = getTourBySlug(params.slug, [
    "title",
    "slug",
    "subtitle",
    "days",
    "description",
    "tourdesc",
    "bg_image",
    "image",
    "type",
    "category",
    "cat",
    "tags",
    "weight",
    "type",
    "overview",
    "over",
    "highlights",
    "inclusions",
    "accommodation",
    "meals",
    "refreshments",
    "faq",
    "content",
    "galleryimages",
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
