import TourPreview from './tour-preview'
import TourCard from './tour-card'
import { Container } from 'react-bootstrap'

export default function TourItem({ tours }) {
  return (
    <section> 
        <div className="row">
          {tours.map((tour) => (
            <TourCard
              key={tour.slug}
              slug={tour.slug}
              title={tour.title}
              subtitle={tour.subtitle}
              days={tour.days}
              // description={tour.description}
              // tourdesc={tour.tourdesc}
              bg_image={tour.bg_image}
              image={tour.image}
              category={tour.category}
              cat={tour.cat}
              tags={tour.tags}
              weight={tour.weight}
              type={tour.type}
              // overview={tour.overview}
              // over={tour.over}
              // highlights={tour.highlights}
              // inclusions={tour.inclusions}
              // accommodation={tour.accommodation}
              // meals={tour.meals}
              // refreshments={tour.refreshments}
              // faq={tour.faq}
              // content={tour.content}
              // galleryimages={tour.galleryimages}
              />
          ))}
        </div>
       
    </section>
  )
}
