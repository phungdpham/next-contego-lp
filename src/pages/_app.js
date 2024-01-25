import React from "react";
import "styles/global.css";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import "util/analytics";
// import TagManager from 'react-gtm-module';
import TagManager from 'react-gtm-module';

 
const tagManagerArgs = {
    gtmId: 'GTM-5N8F4RFW'
}
 
// TagManager.initialize(tagManagerArgs)


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
