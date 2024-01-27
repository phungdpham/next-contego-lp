import React from 'react';
import 'styles/global.css';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import 'util/analytics';
// import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }) {
  // const tagManagerArgs = {
  //   gtmId: 'GTM-5N8F4RFW',
  // };

  // TagManager.initialize(tagManagerArgs);

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
