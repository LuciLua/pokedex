import Image from "next/image";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="wrap">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
