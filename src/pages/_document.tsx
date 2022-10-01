import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocumnent extends Document {
  render() {
    return (
      <Html>
        <Head>
          <head>
            <title>Pokedéx</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link
              href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap&Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,700&display=swap"
              rel="stylesheet"
            />
                <link rel="icon" href="/pokebola.png" />
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
