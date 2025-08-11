import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * Custom Document to inject Google Fonts and Font Awesome CDN links into the head.
 * This is only rendered on the server side and is used to set up global
 * resources that need to be included once per page.
 */
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Preconnect to Google Fonts to improve loading performance */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          {/* Google Fonts for typography */}
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Montserrat:wght@400;600;700&family=Roboto+Mono:wght@400;700&display=swap"
            rel="stylesheet"
          />
          {/* Font Awesome icons */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            integrity="sha512-dUIJj9OFuTIJFf0KD/7gYx1dXJmX6G6wdsI/xcSmzCD84XRFxR1ZyKdWCixj3P6N99/uo4t6WumnS/ciw+eDiw=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;