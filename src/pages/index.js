import React from "react";
import Meta from "components/Meta";
import HeroSection2 from "components/HeroSection2";

function IndexPage(props) {
  return (
    <>
      <Meta title="Bấm Ngay để biết thêm 👉" />
      <HeroSection2
        title="Every Contégo product is designed with unique user-friendly features, while performing at the highest sanitation standards."
        subtitle="We are confident in the quality of our products and strive to give you the best customer service. "
        strapline=""
        size="lg"
        bgColor="bg-red-900"
        bgImage=""
        bgImageOpacity={1}
        textColor="text-white"
      />
    </>
  );
}

export default IndexPage;
