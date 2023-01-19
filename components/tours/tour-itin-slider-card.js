import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function TourSliderCard({
  bg_image,
  title,
  subtitle,
  slug,
  cat,
}) {
  return (
    <div className="position-relative mx-1">
      <Image
        className="img-fluid w-100"
        src={bg_image}
        layout="intrinsic"
        width={720}
        height={480}
        alt={title}
      />
      <div className="tour-list-item">
        <p className="position-absolute top-0 end-0 fw-lighter text-white bg-nne-primary text-center px-3 py-1">
          {cat}
        </p>
        <Link href={`/tours/${slug}`}>
          <a>
            <h5 className="text-white fw-bold">{title}</h5>
            <h6 className="text-white fw-light">{subtitle}</h6>
          </a>
        </Link>
      </div>
    </div>
  );
}
