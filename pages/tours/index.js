import { getAllTours } from "../../lib/api";
import { useEffect, useState } from "react";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import TourItem from "../../components/tours/tour-item";
import { Container } from "react-bootstrap";
import TourFilter from "../../data/tourfilter.json";

export default function TourIndex({ allTours }) {
  const [filteredList, setFilteredList] = useState(allTours);
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("active");

  const filterByTag = (filteredData) => {
    if (!selectedTag) {
      return filteredData;
    }

    const filteredTours = filteredData.filter(
      (tour) => tour.tags.indexOf(selectedTag) !== -1
    );
    return filteredTours;
  };
  const filterByCategory = (filteredData) => {
    if (!selectedCategory) {
      return filteredData;
    }

    const filteredTours = filteredData.filter(
      (tour) => tour.category === selectedCategory
    );
    return filteredTours;
  };
  
  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
  };
  
  const handleCategoryChange = (event) => {
    const inputCategory = (event.target.id) ;

    if (inputCategory === selectedCategory) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(inputCategory);
      setSelectedTag("");
    }
  };

  useEffect(() => {
    var filteredData = filterByTag(allTours);
    filteredData = filterByCategory(filteredData);
    setFilteredList(filteredData);
  }, [selectedTag, selectedCategory]);

  console.log(selectedCategory)
  console.log(selectedTag)
  return (
    <>
      <Head>
        <title> Tours | {CMS_NAME} </title>
      </Head>

      <Container className="filterex">
        <h2 className="text-center my-5"> Tours </h2>
          <div className="mx-auto"> 
            <div id="category-options"  className=" justify-content-center mb-5" onClick={handleCategoryChange}>
              <div className={selectedCategory === "active" ? "active-option" : "filter-option"} id="active" >
              Active
              </div>
              <div className={selectedCategory === "leisure" ? "active-option" : "filter-option"} id="leisure">
              Leisure
              </div>
              <div className={selectedCategory === "culture" ? "active-option" : "filter-option"} id="culture">
              Culture
              </div>
            </div> 

            <div className={selectedCategory === "active" ? "d-flex" : "d-none"} value={selectedTag} onChange={handleTagChange} >
       
              <div className="form-check me-3">
                  <input className="form-check-input" type="radio" name="flexRadioDefault"  value="" />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                  All
                  </label>
                </div>
              <div className="form-check me-3">
                  <input className="form-check-input" type="radio" name="flexRadioDefault"  value="cycling" />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Cycling
                  </label>
                </div>
                <div className="form-check me-3">
                  <input className="form-check-input" type="radio" name="flexRadioDefault"  value="trekking"  />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Trekking
                  </label>
                </div>
                <div className="form-check me-3">
                  <input className="form-check-input" type="radio" name="flexRadioDefault"  value="multi-activity" />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Multi Ativity
                  </label>
                </div>
                <div className="form-check me-3">
                  <input className="form-check-input" type="radio" name="flexRadioDefault"  value="overland"  />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Overland
                  </label>
                </div>
            </div>

            <div className={selectedCategory === "leisure" ? "d-flex" : "d-none"} value={selectedTag} onChange={handleTagChange} >
           
              <div className="form-check me-3">
                  <input className="form-check-input" type="radio" name="flexRadioDefault"  value="" />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                  All
                  </label>
                </div>
              <div className="form-check me-3">
                  <input className="form-check-input" type="radio" name="flexRadioDefault"  value="comfort" />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Comfort
                  </label>
                </div>
                <div className="form-check me-3">
                  <input className="form-check-input" type="radio" name="flexRadioDefault"  value="offbeat"  />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Offbeat
                  </label>
                </div>
                <div className="form-check me-3">
                  <input className="form-check-input" type="radio" name="flexRadioDefault"  value="wildlife" />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Wildlife
                  </label>
                </div>
                <div className="form-check me-3">
                  <input className="form-check-input" type="radio" name="flexRadioDefault"  value="roadtrip"  />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Roadtrip
                  </label>
                </div>
            </div>

            <div className={selectedCategory === "culture" ? "d-flex" : "d-none"} value={selectedTag} onChange={handleTagChange} >
             
              <div className="form-check me-3">
                  <input className="form-check-input" type="radio" name="flexRadioDefault"  value="" />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                  All
                  </label>
                </div>
              <div className="form-check me-3">
                  <input className="form-check-input" type="radio" name="flexRadioDefault"  value="arunachal" />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Arunachal Pradesh
                  </label>
                </div>
                <div className="form-check me-3">
                  <input className="form-check-input" type="radio" name="flexRadioDefault"  value="assam"  />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Assam
                  </label>
                </div>
                <div className="form-check me-3">
                  <input className="form-check-input" type="radio" name="flexRadioDefault"  value="nagaland"  />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Nagaland
                  </label>
                </div>
                 
            </div>
        </div>
      </Container>
      <Container className="mt-5">
        <TourItem tours={filteredList} />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const allTours = getAllTours([
    'title',
    'slug',
    'subtitle',
    'days',
    // 'description',
    // 'tourdesc',
    'bg_image',
    'image',
    'type',
    'category',
    'cat',
    'tags',
    'weight',
    'type',
    // 'overview',
    // 'over',
    // 'highlights',
    // 'inclusions',
    // 'accommodation',
    // 'meals',
    // 'refreshments',
    // 'faq',
    // 'content',
    // 'galleryimages',
  ]);

  return {
    props: { allTours },
  };
}
