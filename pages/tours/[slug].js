import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
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
import { Icon } from "@iconify/react";
import SectionSeparator from "../../components/section-separator"; 

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
              {/* <meta property="og:image" content={tour.ogImage.url} /> */}
            </Head>
            <TourHeader
              title={tour.title}
              subtitle={tour.subtitle}
              days={tour.days}
              image={tour.bg_image}
            />
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
                    <ul className="pl-0 m-1">
                      {tour.overview.map((item, index) => (
                        <li className="py-2 border-bottom-not-last" key={index}>
                          <p className="d-inline-block font-primary m-0">
                            <Icon className="me-2 mb-1" icon={item.icon} />
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
                  <TourBody className="mb-5" content={tour.content} />
                </div>
              </div>
              <Tabs
                defaultActiveKey="overview"
                id="uncontrolled-tab-example"
                className="my-5"
              >
                <Tab eventKey="overview" title="Overview">
                  <h5 className="mb-5">Overview</h5>
                  <ul className="pl-0 mb-10">
                    {tour.overs.map((item, index) => (
                      <li className="pt-2 border-bottom-not-last" key={index}>
                        <p className="mt-0">
                          <b className="text-muted">{item.l}</b>
                          <br />
                          {item.d}
                        </p>
                      </li>
                    ))}
                  </ul>
                </Tab>

                <Tab eventKey="highlights" title="Highlights">
                  <h5 className="mb-5">Highlights</h5>
                  <ul className="pl-0 mb-10">
                    {tour.highlights.map((item, index) => (
                      <li
                        className="py-2 border-bottom-not-last liststyle"
                        key={index}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Tab>
                <Tab eventKey="inclusions" title="Inclusions">
                  <h5 className="mb-5">Inclusions</h5>
                  <ul className="pl-0 mb-10">
                    {tour.inclusions.map((item, index) => (
                      <li
                        className="py-2 border-bottom-not-last liststyle"
                        key={index}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Tab>
                <Tab eventKey="accommodation" title="Accomodation">
                  <h5 className="mb-5">Accomodation</h5>
                  <ul className="pl-0 mb-10">
                    <li className="border-bottom-not-last">
                      <p className="mt-2">
                        <b className="fw-bolder text-muted">Meals</b>
                        <br />
                        {tour.meals}
                      </p>
                    </li>
                    <li className="border-bottom-not-last">
                      <p className="mt-2">
                        <b className="fw-bolder text-muted">Accommodation</b>
                        <br />
                        {tour.accommodation}
                      </p>
                    </li>
                    <li className="border-bottom-not-last">
                      <p className="mt-2">
                        <b className="fw-bolder text-muted">Refreshments</b>
                        <br />
                        {tour.refreshments}
                      </p>
                    </li>
                  </ul>
                </Tab>
                <Tab eventKey="gallery" title="Gallery">
                  <h5 className="mb-5">Gallery</h5>
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
                  <h5 className="mb-5">Enquire</h5>
                  <EnquiryForm title={tour.title} />
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
              <div className="my-5">
                <p className="text-muted text-center">
                  * Our Itineraries are quite unique hence we prefer not to put
                  it up on the site. Please write in to us for the detailed
                  itinerary and cost.
                </p>
              </div>

              <SectionSeparator />

              <h4 className="text-capitalize"> other {tour.type} tours</h4>
              <ul className="row my-3">
                {tour.othertours.map((item, index) => (
                  <li className="col-xl-3 col-lg-6 col-md-6 col-sm-12 g-2" key={index}> 
                      <div className="position-relative">
                        <Image
                          className="img-fluid w-100"
                          src={item.image}
                          layout="responsive"
                          width={240}
                          height={160}
                          alt={item.title}
                        />
                        <div className="tour-list-item">
                          <Link href={item.title}>
                            <a>
                              <h5 className="fw-bold">{item.title}</h5>
                            </a>
                          </Link>
                        </div>
                      </div> 
                  </li>
                ))}
              </ul>
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
    "touricon",
    "type",
    "overview",
    "over",
    "overs",
    "highlights",
    "inclusions",
    "accommodation",
    "meals",
    "refreshments",
    "faq",
    "content",
    "galleryimages",
    "othertours",
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
