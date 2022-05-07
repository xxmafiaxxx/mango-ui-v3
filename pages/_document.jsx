import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <meta name="google-site-verification" content="NQByf05uWW3LyZPXuYSc28xIDJAZHplLTbtoaTwhyBs" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <script src="/datafeeds/udf/dist/bundle.js" />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8073049211625467"
     crossOrigin="anonymous"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
