import Head from "next/head";
import { Container, Button } from "react-bootstrap";
import { CMS_NAME } from "../lib/constants";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  },[])

  return (
    <>
      <Head>
        <title>Thank You | {CMS_NAME} </title>
        <meta name="robots" content="noindex"/>
      </Head>
      <Container className="my-5">
        <h4 className="my-5 text-center"> 
          Ooops... Page not found.
        </h4>
        <div className="text-center">
          <Button variant="primary" onClick={() => router.push("/")}> 
            Back to Home
          </Button>
        </div>
      </Container>
    </>
  );
}
