import Link from "next/link";
import Image from "next/image";
import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import Menuitems from "../data/menu.json";

export default function Header() {

  return (
    <Navbar sticky="top" bg="white" expand="lg"  className="shadow-sm">
      <Container fluid>
        <Navbar.Brand>
          <Link href="/">
            <a className="navbar-brand mx-5">
              <Image
                className="img-fluid"
                src="/images/logo.png"
                layout="intrinsic"
                width={100}
                height={60}
                alt="North by Northeast Journeys"
              />
            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" onToggle="expanded" />
        <Navbar.Collapse className="justify-content-end" id="navbarScroll">
          <Nav className="mx-5">
            <ul className="navbar-nav">
              <li className="nav-item text-uppercase">
                <Link href="/">
                  <a className="nav-link"> Home</a>
                </Link>
              </li>
              <li className="nav-item text-uppercase">
                <Link href="/tours">
                  <a className="nav-link"> Tours </a>
                </Link>
              </li>

              <NavDropdown title="ABOUT" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link href="/about-us">
                    <a className="dropdown-item  text-uppercase">About Us</a>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="/about-us/team">
                    <a className="dropdown-item  text-uppercase">Team</a>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="/about-us/insights">
                    <a className="dropdown-item  text-uppercase">Insights</a>
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              {/* <li className="nav-item text-uppercase">
                <Link href="/posts">
                  <a className="nav-link"> Blog </a>
                </Link>
              </li> */}
              <li className="nav-item text-uppercase">
                <Link href="/contact">
                  <a className="nav-link"> Contact </a>
                </Link>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
