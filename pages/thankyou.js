 
import Head from "next/head";
import { Container } from "react-bootstrap";
import { CMS_NAME } from "../lib/constants"; 
 

export default function Thankyou( ) {
   
  return (
    <>
      <Head>
        <title> {CMS_NAME} </title>
      </Head> 
       <Container>
         <h4 className="my-5 text-center"> Thank you for your message we will get back to you as soon as possible. </h4>
       </Container>
    </>
  );
}
 