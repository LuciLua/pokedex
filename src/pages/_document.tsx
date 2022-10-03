import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocumnent extends Document {
  render() {
    const googleFonts = "https://fonts.googleapis.com/css2?family=Inter&family=Montserrat:wght@100;400;500;700;800;900&display=swap";
    return (
      <Html>
        <Head>
          <head>
            <title>Pokedéx</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link
              href={googleFonts}
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
