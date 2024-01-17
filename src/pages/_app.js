import React from "react";
import "styles/global.css";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import "util/analytics";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar bgColor="bg-white" />

      <Component {...pageProps} />

      <Footer
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
        sticky={true}
      />
    </>
  );
}

export default MyApp;
