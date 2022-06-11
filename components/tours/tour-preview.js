import Link from "next/link";
import Image from "next/image";

export default function TourPreview({
  title,
  slug, 
  subtitle,
  days, 
  bg_image,
  image,
  cat,
  category,
  tags,
  weight,
  type,
}) {
  return (
    <> 
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 g-2" >
        <div className="position-relative">
         <Image
            className="img-fluid w-100"
            src={bg_image}
            layout="responsive"
            width={240}
            height={160}
            alt={title}
          />
          <div className="tour-list-item">
            <Link href={`/tours/${slug}`}>
              <a>
                <h5 className="fw-bold">{title}</h5> 
                <h6>{subtitle}</h6> 
                <h6>{days}</h6>
                <p className="text-white">{cat}</p>
              </a>
            </Link> 
          </div>
        </div>
      </div> 
    </>
  );
}
