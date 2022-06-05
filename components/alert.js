import { Container, Col, Nav } from "react-bootstrap";
import Image from "next/image";
import Sociallinks from "../data/social.json";

export default function Alert() {
  return (
    <div className="alert bg-dark d-flex justify-content-end text-light rounded-0 mb-0 py-0 pe-1">
      <Nav className="mx-5">
        <ul className="list-inline text-center text-md-right my-1">
          <li className="list-inline-item mx-1 my-0">
            <a
              className="font-secondary text-white my-0"
              href="mailto:info.northbynortheast@gmail.com"
            >
              info.northbynortheast@gmail.com
            </a>
          </li>{" "}
          |
          <li className="list-inline-item ms-2 me-1 my-0">
            <a
              className="font-secondary text-white my-0"
              href="tel:+919940416065"
            >
              +91 99404 16065
            </a>
          </li>
          <li className="list-inline-item mx-1 my-0">
            <a
              className="font-secondary text-white my-0"
              href="tel:+918486183666"
            >
              +91 84861 83666
            </a>
          </li>
          {Sociallinks.social.map((item, index) => (
            <li className="list-inline-item mx-1 my-0" key={index}>
              <a href={item.link} className="my-0 " target="_blank">
                <Image
                  className=" "
                  src={item.icon}
                  width={15}
                  height={15}
                  alt=""
                />
              </a>
            </li>
          ))}
        </ul>
      </Nav>
    </div>
  );
}
