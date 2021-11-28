import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocumnent extends Document {
  render() {
    return (
      <Html>
        <Head>
          <head>
            <title>Pokedéx</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap"
              rel="stylesheet"
            />
            <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
            <link rel="stylesheet" href="/nprogress.css" type="text/css" />
          </head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
