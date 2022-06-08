import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
         <Head>
          {/* <link 
             rel="preload" as="font"
             href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Poppins:300,400,500,600,700|Work+Sans:400,500,600"
           /> */}

          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"/> 

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
