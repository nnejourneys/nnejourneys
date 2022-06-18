import React from "react";
import { Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export default function CTA() {
  return (
    <>
      <section className="cta section-sm overlay my-auto  d-flex justify-content-end align-content-center">
        <Image
          className=" "
          src="/images/ferry-crossing.jpg"
          layout="fill"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8v4CpHgAGaQIiff9TZQAAAABJRU5ErkJggg=="
          objectFit="cover"
          objectPosition="center"
        />
        <div className="container d-flex justify-content-end align-self-center">
          <Link href="/contact">
            <Button className="btn btn-light text-uppercase cta-btn">
              get in touch
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
