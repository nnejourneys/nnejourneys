import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
         <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Poppins:300,400,500,600,700|Work+Sans:400,500,600"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
