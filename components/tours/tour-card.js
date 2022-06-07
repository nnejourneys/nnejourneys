import Link from "next/link";
import Image from "next/image";
import { Button } from "react-bootstrap";

export default function TourCard({
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
      <div className="col-xl-6 col-lg-12">
        <div className="card mb-3 shadow">
          <div className="row g-0">
            <div className="col-md-7">
              <Image
                className="img-fluid "
                src={bg_image}
                layout="responsive"
                width={240}
                height={160}
                alt={title}
              />
            </div>
            <div className="col-md-5">
              <div className="card-body">
                <Link href={`/tours/${slug}`}>
                  <a>
                    <h6 className="card-title mb-0">{title}</h6>
                    <p className="card-text mb-0">{subtitle}</p>
                    <p className="card-text mb-0">{days}</p>
                    <p className="card-text mb-0">
                      <small className="text-muted">{cat}</small>
                    </p>
                  </a>
                </Link>
                </div>
                <div className="card-footer bg-transparent border-0 ">
                <Link href={`/tours/${slug}`}>
                  <a >
                    <Button className="align-bottom" variant="btn btn-card ">Read more</Button>
                  </a>
                </Link>
                
              </div>
            </div>
          </div>
        </div>

        {/* 
        <div className="row bg-dark">
          <div className="col-7 p-2">
            <Image
              className="img-fluid "
              src={bg_image}
              layout="responsive"
              width={240}
              height={160}
              alt={title}
            />
          </div> */}

        {/* <div className="col-5 p-2 bg-golden">
            <Link href={`/tours/${slug}`}>
              <a>
                <h5 className="fw-bold">{title}</h5>
                <h6>{subtitle}</h6>
                <h6>{days}</h6>
                <p className="text-white">{cat}</p>
              </a>
            </Link>
          </div> 
        </div>*/}
      </div>
    </>
  );
}
