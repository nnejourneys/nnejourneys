import React from "react";
import ContactForm from "../components/contact-form";
import Contactdata from "../data/contact.json";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <section class="section">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 offset-lg-1 col-md-5">
              <h2 class="section-title">Contact Us</h2>

              <ul className="pl-0">
                {Contactdata.contacts.phone.map((item, index) => (
                  <li className="d-flex mb-30" key={index}>
                    <div className="round-icon me-3">
                      <Image
                        src="/images/icons/mobile.svg"
                        width={30}
                        height={30}
                        alt=""
                      />
                    </div>
                    <div className="align-self-center font-primary">
                      <div >
                        <a className="text-dark" href={item.link}> {item.name}</a>
                      </div>
                    </div>
                  </li>
                ))}

                <li className="d-flex mb-30">
                  <div className="round-icon me-3">
                    <Image
                      src="/images/icons/email.svg"
                      width={30}
                      height={30}
                      alt=""
                    />
                  </div>
                  <div className="align-self-center font-primary">
                    <div> <a className="text-dark" href={Contactdata.email.link}>{Contactdata.email.name}</a></div>
                  </div>
                </li>
                <li className="d-flex mb-30">
                  <div className="round-icon me-3">
                    <Image
                      src="/images/icons/map.svg"
                      width={30}
                      height={30}
                      alt=""
                    />
                  </div>
                  <div className="align-self-center font-primary">
                    <div className="text-dark"> {Contactdata.address.name}</div>
                  </div>
                </li>
              </ul>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
