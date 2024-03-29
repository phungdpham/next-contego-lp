import React from "react";
import Meta from "components/Meta";
import HeroSection from "components/HeroSection";
import ContactSection from "components/ContactSection";

function ContegoHygieneLinerPage(props) {
  return (
    <>
      <Meta title="Bấm Ngay để biết thêm 👉" />
      <HeroSection
        // title="Tại sao Contégo Hygiene Liner là lựa chọn hàng đầu của khách hàng tiệm nails?"
        title="Tại sao Contégo Hygiene Liner được ưa dùng?"
        subtitle="Xem ngay video để biết thêm"
        strapline=""
        size="lg"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
      <ContactSection
        // title="TƯ VẤN MIỄN PHÍ"
        title="ƯU ĐÃI ĐẶC BIỆT KHI MUA GHẾ CONTÉGO SPA"
        subtitle="Liên hệ ngay để nhận tư vấn miễn phí!"
        strapline=""
        size="md"
        bgColor="bg-red-900"
        bgImage="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?crop=entropy&fit=crop&h=800&q=80&w=1280"
        bgImageOpacity={0.17}
        textColor="text-white"
      />
    </>
  );
}

export default ContegoHygieneLinerPage;
