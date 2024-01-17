import React from "react";
import Meta from "components/Meta";
import ThankYouSection from "components/ThankYouSection";

function ThankYouPage(props) {
  return (
    <>
      <Meta title="Thank You" />
      <ThankYouSection
        title="Thank you"
        subtitle="Nhân viên  Contégo Spa sẽ liên hệ tư vấn Anh/Chị sớm nhất"
        strapline="We reply in 24h"
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
    </>
  );
}

export default ThankYouPage;
